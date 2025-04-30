import React from 'react';
import 'animate.css';

const About = () => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center text-center pt-24 px-4"
      style={{
        backgroundImage: 'url(/img2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      <div className="max-w-3xl text-black animate__animated animate__zoomIn animate__faster">
        <h1 className="text-4xl font-bold mb-6">
          About Us
        </h1>

        <p className="text-lg font-semibold font-[cursive] mb-4">
          Welcome to Adopt a Pet, a web platform, established by Mars Petcare to connect pet lovers who would like to adopt pets from registered animal shelters in their region.
        </p>

        <p className="text-lg font-semibold font-[cursive] mb-4">
          We have a passionate belief that every dog and cat deserve a loving home and aspire to help re-home homeless pets across India.
        </p>

        <p className="text-lg font-semibold font-[cursive] mb-4">
          Our objectives are simple yet challenging enough to…
        </p>

        <ul className="list-disc text-left text-lg font-semibold font-[cursive] pl-5 mb-4">
          <li>Encourage adoption to give pets a second chance while giving shelters the opportunity to take and care for other homeless and stray dogs and cats.</li>
          <li>Help pet owners fulfil their lifetime commitment to their pets.</li>
          <li>Encourage pet owners to act responsibly so both them and their pets are welcomed as good neighbors within the community.</li>
        </ul>

        <p className="text-lg font-semibold font-[cursive] mb-4">
          If you are considering adopting a pet, go start your search by exploring our extensive list of dogs and cats available for adoption near you.
        </p>

        <p className="text-lg font-semibold font-[cursive]">
          Make a difference, give a pet a forever home today!
        </p>
      </div>
    </div>
  );
};

export default About;
