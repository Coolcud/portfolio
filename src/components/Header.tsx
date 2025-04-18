const Header = () => {
  const navLink = (href: string, text: string) => {
    return (
      <a
        href={`#${href}`}
        className="text-gray-700 hover:text-indigo-500 font-medium"
      >
        {text}
      </a>
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">sagechoi.dev</h1>
        <nav className="space-x-4">
          {navLink("about", "About")}
          {navLink("projects", "Projects")}
        </nav>
      </div>
    </header>
  );
};

export default Header;
