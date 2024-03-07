import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useParams } from "react-router-dom";
import { Avatar } from "../components/Avatar";
import { Navbar } from "../components/Navbar";
import { useBlog } from "../hooks/blogs";
import { BlogLoadingSkeleton } from "../components/BlogLoadingSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  if (loading) {
    return (
      <div>
        <Navbar />
        <BlogLoadingSkeleton />
      </div>
    );
  }

  const editorConfig = {
    namespace: "Blog content",
    nodes: [],
    editable: false,
    editorState: blog?.content,
    onError(error: Error) {
      throw error;
    },
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-5xl font-bold leading-tight mb-4">{blog?.title}</h1>
        <div className="flex items-center space-x-4">
          <Avatar name={blog?.author.name || ""} />
          <p className="text-sm font-semibold">{blog?.author.name}</p>
          {/* <span className="text-sm">22 hours ago</span> */}
        </div>
        <article>
          <LexicalComposer initialConfig={editorConfig}>
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={null}
              ErrorBoundary={LexicalErrorBoundary}
            />
          </LexicalComposer>
        </article>
      </div>
    </div>
  );
};
