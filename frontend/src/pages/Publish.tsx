import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import axios from "axios";
import { EditorState } from "lexical";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import EditorTheme from "../plugins/EditorTheme";
import ToolbarPlugin from "../plugins/ToolbarPlugin";

function Placeholder() {
  return <div className="editor-placeholder">Start writing...</div>;
}

function OnChangePlugin({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

const editorConfig = {
  namespace: "Medium project text editor",
  nodes: [],
  onError(error: Error) {
    throw error;
  },
  theme: EditorTheme,
};

export const Publish = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const navigate = useNavigate();

  const onContentChange = (editorState: EditorState) => {
    const editorStateJSON = editorState.toJSON();
    setContent(JSON.stringify(editorStateJSON));
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
    );

    navigate(`/blog/${response.data.id}`);
  };

  return (
    <div>
      <Navbar />
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <input
            className="w-full font-semibold px-3 pt-2 text-xl focus:outline-none"
            placeholder="Title of the blog"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={onContentChange} />
          </div>
        </div>
        <div className="mt-0 ml-16 md:ml-24 lg:ml-32 ">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none shadow-md shadow-cyan-500/50 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={handleSubmit}
          >
            Publish Post
          </button>
        </div>
      </LexicalComposer>
    </div>
  );
};
