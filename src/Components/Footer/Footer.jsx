const Footer = () => {
  return (
    <div className="bg-black mt-20 text-white text-neutral-content">
      <footer className="footer p-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <aside className="flex items-center space-x-2 mb-4 md:mb-0">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <div>
            <p className="font-bold">Nest Inn</p>
            <p>Providing reliable tech since 1992</p>
          </div>
        </aside>
        <nav className="mb-4 md:mb-0">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#1877F2]"
              >
                <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24h11.499V14.709h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#E4405F]"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.265-.069-1.645-.069-4.849s.011-3.584.069-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.058 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.333.015 7.052.072 5.772.128 4.474.383 3.42 1.437 2.365 2.491 2.111 3.789 2.055 5.07.998 6.353.984 6.774.984 12s.014 5.647.071 6.928c.056 1.281.311 2.579 1.365 3.633 1.053 1.053 2.352 1.309 3.633 1.365 1.281.057 1.704.071 6.928.071s5.647-.014 6.928-.071c1.281-.056 2.579-.311 3.633-1.365 1.053-1.053 1.309-2.352 1.365-3.633.057-1.281.071-1.704.071-6.928s-.014-5.647-.071-6.928c-.056-1.281-.311-2.579-1.365-3.633C21.575.383 20.277.128 18.996.072 17.715.015 17.292 0 12 0z"></path>
                <circle cx="12" cy="12" r="3.6"></circle>
                <path d="M18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 1 1 2.88 0z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#0A66C2]"
              >
                <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9.04h3.56v11.41zM5.34 7.52c-1.15 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08c1.14 0 2.08.93 2.08 2.08S6.48 7.52 5.34 7.52zM20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.65H9.34V9.04h3.42v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.6 0 4.27 2.37 4.27 5.44v6.28z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <section className="footer items-center justify-center p-4 border-t border-neutral-focus">
        <aside className="items-center">
          <p className="text-center">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </section>
    </div>
  );
};

export default Footer;