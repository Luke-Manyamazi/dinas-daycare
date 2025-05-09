const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-placeholder.png"
            alt="Dina's Day Care Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-pink-600">
            Dina&apos;s Day Care
          </h1>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <a href="#about" className="hover:text-pink-500">
            About Us
          </a>
          <a href="#services" className="hover:text-pink-500">
            Our Services
          </a>
          <a href="#curriculum" className="hover:text-pink-500">
            Curriculum
          </a>
          <a href="#gallery" className="hover:text-pink-500">
            Gallery
          </a>
          <a href="#contact" className="hover:text-pink-500">
            Contact
          </a>
          <a href="#blog" className="hover:text-pink-500">
            Parents Corner
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
