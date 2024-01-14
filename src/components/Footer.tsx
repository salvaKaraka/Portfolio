export default function Footer() {
  return (
    <footer className=" 
    flex flex-col items-center justify-center gap-4 py-8
     ">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/andres-ruiz-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a
            href="https://www.github.com/andresruizramirez/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 dark:hover:text-violet-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0 -1.3-3.2 4.2 4.2 0 0 0 -.1-3.2s-1.1-.3-3.5 1.3a12.2 12.2 0 0 0 -6.2 0C7.1 2.6 6 2.9 6 2.9a4.2 4.2 0 0 0 -.1 3.2A4.6 4.6 0 0 0 5 9.5c0 4.7 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
              />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          &copy; 2021 Andrés Ruiz Ramírez. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
