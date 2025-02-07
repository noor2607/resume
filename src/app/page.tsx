'use client';

import Image from 'next/image';

export default function Resume() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-5 md:p-10">
    
      <div className="bg-gray-600 text-white p-6 md:w-1/3 rounded-lg">
        <div className="flex flex-col items-center">
        <Image 
      src="/hero.jpg" 
        alt="Profile Picture" 
       width={170} 
       height={150} 
       className="rounded-full border-4 border-white object-contain w-[150px] h-[150px]" 
/>          <h2 className="text-lg font-semibold mt-4">About Me</h2>
          <p className="text-sm text-gray-300 text-center mt-2">
            Passionate and driven web developer with expertise in Next.js and backend development. Constantly exploring new technologies, currently diving into Generative AI and Cloud Computing under the Governor Sindh IT Initiative.
          </p>
        </div>
        <div className="mt-6 text-gray-300">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm mt-2">📞 0302-3462308</p>
          <p className="text-sm">📧 larebnoor4@gmail.com</p>
          <p className="text-sm">📍 Karachi, Pakistan</p>
        </div>
        <div className="mt-6 text-gray-300">
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="text-sm mt-2 list-disc list-inside">
            <li>Web Development</li>
            <li>Next.js</li>
            <li>Backend Development</li>
            <li>Github</li>
            <li>Typescript</li>
          </ul>
        </div>
      </div>

  
      <div className="bg-white p-6 md:w-2/3 rounded-lg shadow-md ml-0 md:ml-10">
        <h1 className="text-4xl font-bold">Lareb Noor Buriro</h1>
        <p className="text-lg text-gray-600">Web Developer</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4">
            <p className="font-bold">BSc Graduate</p>
            <p className="text-gray-700 font-semibold">Shah Abdul Latif University, Khairpur</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Governor Sindh IT Initiative</h2>
            <p className="text-sm text-gray-600">Currently pursuing Generative AI and Cloud Computing to enhance expertise in emerging technologies.</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-4">
            <p className="font-bold">Fresh Developer</p>
            <p className="text-gray-700 font-semibold">Completed more than 20 projects</p>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
              <li>Developed and launched a fully functional eCommerce website</li>
              <li>Built various web applications using Next.js</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-4">
            <p className="font-bold">E-Commerce Platform</p>
            <p className="text-sm text-gray-600">A fully functional e-commerce website with user authentication, and an intuitive UI.</p>
          </div>
          <div className="mt-4">
            <p className="font-bold">Portfolio Website</p>
            <p className="text-sm text-gray-600">A personal portfolio showcasing projects, skills, and experience using Next.js and Tailwind CSS.</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="mt-4">
            <p className="font-bold">Generative AI & Cloud Computing</p>
            <p className="text-sm text-gray-600">Certified under the Governor Sindh IT Initiative program.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
