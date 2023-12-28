import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="flex-col text-center py-40 ">
      <div className="mx-auto text-xl text-left max-w-xl ">
        <div className="mb-8 text-3xl text-left font-bold">Projects</div>
      </div>
      <ul className="mx-auto max-w-2xl grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <li
          className="outline bg-backgroundcolor
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
        >
          <a target="_blank">
            <div className="mb-1 text-2xl font-bold">Personal Portfolio</div>
            <p className="mb-4 text-xl text-left">
              Developed a personal portfolio utilizng the Next.js framework.
              Exercised the use of Tailwind to style nearly all the visible
              components. The site is currently being hosted Netlify.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold">
              <li className="list-inside">Next.js</li>
              <li className="list-inside">TypeScript</li>
              <li className="list-inside">Tailwind</li>
            </ul>
          </a>
        </li>
        <button>
        <li
          className="outline bg-backgroundcolor
          p-7 transition-transform hover:-translate-y-2 rounded-xl"
        >
          <Link href="https://github.com/almond5/comp-notes">
            <div>
              <div className="mb-1 text-2xl font-bold">Comp Notes</div>
              <div className="mb-4 text-xl text-left">
                Created a notes app where users can view, create, and delete
                comp notes at will. Via Next-Auth, all of the user&apos;s notes
                will be secured.
              </div>
              <ul className="py-2 flex flex-wrap gap-x-2.5 gap-y-1.5 text-xl text-left italic font-semibold">
                <li className="list-inside">Next.js</li>
                <li className="list-inside">TypeScript</li>
                <li className="list-inside">Next-Auth</li>
                <li className="list-inside">Tailwind</li>
                <li className="list-inside">Prisma</li>
              </ul>
            </div>
          </Link>
        </li>
        </button>
        <div className="py-2">
        <button>

          <li
            className="outline bg-backgroundcolor
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <Link href="https://github.com/almond5/PetPals">
              <div>
                <div className="mb-1 text-2xl font-bold">
                  PetPals
                </div>
                <div className="mb-4 text-xl text-left">
                Collaborated to create a dating app for pets in which pet 
                owners can create pet profiles and connect with others.
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold">
                  <li className="list-inside">Next.js</li>
                  <li className="list-inside">Tailwind</li>
                  <li className="list-inside">Prisma</li>
                  <li className="list-inside">NoSQL</li>
                  <li className="list-inside">Vercel</li>
                  <li className="list-inside">Figma</li>
                </ul>
              </div>
            </Link>
          </li>
          </button>
        </div>
        <div className="py-2">
          <li
            className="outline bg-backgroundcolor
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <div>
              <div className="mb-1 text-2xl font-bold">PL/0 Compiler</div>
              <div className="mb-4 text-xl text-left">
                Implemented a lexical analyzer, parser, and code generator for
                the PL/0 language. Enabled the steps of the compiler to be
                visualized via distinct output files.
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold">
                <li className="list-inside">C</li>
              </ul>
            </div>
          </li>
        </div>
        <div className="py-2">
        <button>

          <li
            className="outline bg-backgroundcolor
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <Link href="https://github.com/almond5/Uni_Connect">
              <div>
                <div className="mb-1 text-2xl font-bold">
                  University Connect
                </div>
                <div className="mb-4 text-xl text-left">
                  Implemented a college social platform which facilitated event
                  and RSO administration for several universities. Enabled users
                  to view/join these events and/or RSOs.
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold">
                  <li className="list-inside">Next.js</li>
                  <li className="list-inside">Tailwind</li>
                  <li className="list-inside">Prisma</li>
                  <li className="list-inside">MySQL</li>

                </ul>
              </div>
            </Link>
          </li>
          </button>
        </div>
        <div className="py-2">
          <button>
          <li
            className="outline bg-backgroundcolor
            p-7 transition-transform hover:-translate-y-2 rounded-xl"
          >
            <Link href="https://github.com/almond5/POOSD">
            <div>
              <div className="mb-1 text-2xl font-bold">Contastic</div>
              <div className="mb-4 text-xl text-left">
                Created an autheticated contact management system where users
                can create, edit, search, and delete contacts. Deployed the LAMP application on Digital Ocean. </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xl text-left italic font-semibold">
                <li className="list-inside">PHP</li>
                <li className="list-inside">Javascript</li>
                <li className="list-inside">MySQL</li>
                <li className="list-inside">Digital Ocean</li>

              </ul>
            </div>
            </Link>
          </li>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Projects;
