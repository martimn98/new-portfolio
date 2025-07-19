export function Socials() {
  return (
    <div className="flex space-x-1 ">
      <a
        href="https://orcid.org/0000-0003-0225-1201"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OrcidIcon className="h-6 text-gray-500 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="https://scholar.google.com/citations?user=vA4P-dAAAAAJ&hl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ScholarIcon className="h-6 text-gray-500 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="https://bsky.app/profile/exobeatriz.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BlueskyIcon className="h-6 text-gray-500 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="mailto:becampos@mpia.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon className="h-6 text-gray-500 hover:text-primary-400 cursor-pointer" />
      </a>
    </div>
  );
}

const OrcidIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="currentColor"
      d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91c0-41.64-26.54-76.9-84.67-76.9M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57a19.64 19.64 0 0 1-19.57 19.57M300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369"
    />
  </svg>
);

const ScholarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="currentColor"
      d="M390.9 298.5s0 .1.1.1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64c1.7-3.6 3.6-7.2 5.6-10.7q6.6-11.4 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7L256 0l256 202.7l-94.7 77.1z"
    />
  </svg>
);

const BlueskyIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="currentColor"
      d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2c-18.2 64.8-84.4 81.4-143.3 71.3C456 322 482.2 380 425.6 438c-107.4 110.2-154.3-27.6-166.3-62.9c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"
    />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="currentColor"
      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0z"
    />
  </svg>
);
