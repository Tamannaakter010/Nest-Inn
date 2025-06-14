import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Valid email required");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Subscribed!");
    setEmail("");
    // Add API call here if needed
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl rounded-xl px-3 mx-auto bg-gradient-to-br from-blue-100 to-gray-900 text-white shadow-md">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Stay Inspired</h1>
        <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-md">
          Join our newsletter for updates and exclusive offers.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 w-full max-w-sm"
      >
        <label htmlFor="email-input" className="sr-only">
          Email Address
        </label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 px-3 py-2 border border-white/20 rounded-md outline-none focus:ring-1 focus:ring-blue-500 w-full transition-all placeholder-gray-400 text-sm"
          placeholder="Your email"
          aria-label="Enter your email address"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-black hover:bg-cyan-900 px-4 py-2 rounded-md text-sm font-medium active:scale-95 transition-all"
        >
          Subscribe
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </form>
      {error && <p className="text-red-400 mt-2 text-xs text-center">{error}</p>}
      {success && (
        <p className="text-green-400 mt-2 text-xs text-center">{success}</p>
      )}
      <p className="text-gray-400 mt-3 text-[0.65rem] text-center max-w-xs">
        By subscribing, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-blue-400">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default NewsLetter;