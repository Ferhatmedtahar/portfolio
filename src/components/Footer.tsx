// import Image from "next/image";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-poppins">
      <div className=" border-t pt-6 border-primary-800  pb-2 px-5 sm:px-20 xl:px-52 cursor-default">
        <div className="flex items-center flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <div>
                <h2 className="text-xl font-medium text-primary-200/90">
                  Ferhat Mohamed Tahar
                </h2>
                <div className="flex gap-2 items-center">
                  <Image
                    alt="Algerian Flag"
                    loading="lazy"
                    width="25"
                    height="25"
                    src="/algeria.svg"
                  />
                  <p className="text-primary-300/80">Based In Algeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <p className="text-primary-300/80 max-w-md">
              Built with Next.js, Typescript and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
      <div className="text-foreground pb-6 px-5 sm:px-20 xl:px-52">
        <div className="mx-auto flex justify-between items-center">
          <p className="text-xs sm:text-sm font-poppins text-primary-300/85">
            © 2024 Ferhat.
            <br className="block sm:hidden" /> All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xl text-gray-700">
            {/* GitHub Link */}
            <a
              href="https://github.com/nadir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="hover:text-[#591d75] duration-100 transition-colors "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1.05em"
                width="1.05em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
              </svg>
            </a>

            {/* LinkedIn Link */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              height="1.1em"
              width="1.1em"
              className="hover:text-[#6d94e9] duration-100 transition-colors  "
              fill="currentColor"
            >
              <path d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5	C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0	c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z" />
            </svg>
            {/* Twitter Link */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white duration-100 transition-colors "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
