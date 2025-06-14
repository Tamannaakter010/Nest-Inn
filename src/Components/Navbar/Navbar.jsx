import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaHome } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { RiUserHeartLine } from 'react-icons/ri';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
      { name: 'My Bookings', path: '/mybookings' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const location = useLocation();

useEffect(() => {
  // Check if not home route
  if (location.pathname !== '/') {
    setIsScrolled(true);
    return;
  }

  // For homepage, handle scroll position
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);

  // Initial check on mount (optional)
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);

  return (
   <nav
  className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
    isScrolled
      ? 'bg-gradient-to-br from-blue-100 to-gray-900 shadow-md text-white backdrop-blur-lg py-3 md:py-4'
      : 'py-4 md:py-6 text-white'
  }`}
>
      {/* Logo */}
      <div className="flex items-center gap-1">
        <FaHome />
        <div className="font-bold">Nest Inn</div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
        <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? 'text-black' : 'text-white'
          } transition-all`}
          onClick={() => navigate("/owner")}
        >
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <FaSearch />
        <RiUserHeartLine />
        {user ? (
          <div className="relative group">
            <div className="group flex items-center">
              <UserButton />
              <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white shadow rounded py-2 w-48 text-sm text-gray-800 z-50">
                <button
                  onClick={() => navigate('/my-bookings')}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  <BookIcon />
                  My Bookings
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && <UserButton />}
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? 'invert' : ''}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <RxCross2 />
        </button>

        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {user && (
          <>
            <button
              className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/owner");
              }}
            >
              Dashboard
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-full"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/my-bookings");
              }}
            >
              <BookIcon />
              My Bookings
            </button>
          </>
        )}
        <RiUserHeartLine />
        {!user && (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openSignIn();
            }}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar; // no changes, just corrected errors if any
