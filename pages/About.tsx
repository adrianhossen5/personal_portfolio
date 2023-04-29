import React from 'react';

const About = () => {
  return (
    <div id='about' className='flex-col text-center'>
      <div className='mx-auto max-w-sm text-xl text-left xs:max-w-sm sm:max-w-sm 
        md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg'>
        <p className='mb-3 text-left text-2xl font-semibold xs:text-2xl sm:text-2xl 
          md:text-2xl lg:text-3xl xl:text-3xl'>
          About Me
        </p>
        <p className='mb-4 text-xl text-left'>
          Greetings! Here is a little bit about my programming journey: My
          programming journey started back in middle school where Minecraft was
          the most popular game at the time. Due to this huge popularity, my
          interests in all things Minecraft grew, which included coding plugins
          and modifications. This slippery sloped into me declaring my major as
          Computer Science at the University of Central Florida.
        </p>
        <p className='mb-4 text-xl text-left'>
          I recently completed an internship with Microsoft as an Explore intern
          (PM/SWE) where I developed many skills that I plan to build upon
          within the upcoming years. At this 12 week internship, I was tasked on
          creating a User Experience for Bing under Content Services. I&apos;m
          also an incoming Software Engineering intern for Microsoft where I
          will continue to deliver user experiences for Bing.
        </p>
        <p className='mb-4 text-xl text-left'>
          Here is a list of the technologies that I&apos;m familiar with!
        </p>
        <ul className='grid grid-cols-2 whitespace-nowrap text-xl text-left'>
          <li className='list-inside list-disc'>Azure DevOps</li>
          <li className='list-inside list-disc'>JavaScript</li>
          <li className='list-inside list-disc'>PlanetScale DB</li>
          <li className='list-inside list-disc'>TypeScript</li>
          <li className='list-inside list-disc'>CosmoDB</li>
          <li className='list-inside list-disc'>Prisma</li>
          <li className='list-inside list-disc'>SQL</li>
          <li className='list-inside list-disc'>HTML</li>
          <li className='list-inside list-disc'>Python</li>
          <li className='list-inside list-disc'>Node.js</li>
          <li className='list-inside list-disc'>Next.js</li>
          <li className='list-inside list-disc'>Java</li>
          <li className='list-inside list-disc'>C#</li>
          <li className='list-inside list-disc'>CSS</li>
          <li className='list-inside list-disc'>C</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
