export const Avatar = ({ name }: { name: string }) => {
  const getInitials = () => {
    const names = name.split(" ");
    const initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      const lastNameInitial = names[names.length - 1]
        .substring(0, 1)
        .toUpperCase();
      initials.concat(lastNameInitial);
    }

    return initials;
  };

  return (
    <span
      className="flex items-center justify-center size-9 
      text-sm font-semibold leading-none rounded-full 
      bg-teal-100 text-teal-800"
    >
      {getInitials()}
    </span>
  );
};
