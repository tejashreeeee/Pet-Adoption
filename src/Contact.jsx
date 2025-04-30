import React from 'react';

const Contact = () => {
  const forms = [
    { img: '/img10.png', label: 'Application Form' },
    { img: '/img11.png', label: 'Request Sterilization' },
    { img: '/img12.png', label: 'Report Animal Cruelty' },
    { img: '/img13.png', label: 'Surrender Pet Form' }
  ];

  return (
    <div className="pt-16">
      {/* Header Image */}
      <img
        src="/img9.png"
        alt="Contact Banner"
        style={{ width: '25%', height: 'auto', objectFit: 'cover' }}
      />

      {/* Image grid with buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 text-center">
        {forms.map((form, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={form.img}
              alt={form.label}
              className="w-full h-auto max-w-[200px] rounded-lg shadow"
            />
            <button className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              {form.label}
            </button>
          </div>
        ))}
      </div>

      {/* New Title After Images */}
      <h2 className="text-2xl text-black font-bold text-center mt-8 mb-4">How Can You Reach Us?</h2>


      {/* Google Map for Yellapur */}
      <div className="flex justify-center px-4 pb-12">
        <iframe
          title="Yellapur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.051535765262!2d74.70788117505218!3d14.96431118947562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbec6bc0de0de1b%3A0xd3f27fbd85ccf8f5!2sYellapur!5e0!3m2!1sen!2sin!4v1714500300000!5m2!1sen!2sin"
          width="60%"
          height="350"
          style={{ border: 0, maxWidth: '1000px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
