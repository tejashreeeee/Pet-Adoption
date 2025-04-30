import React, { useState } from 'react';
import Carousel from './Carousel';

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('+91');  // Default to '+91'

  const handleStart = () => {
    setOpen(true);
    setStep(0);
    setPhone('+91');  // Reset phone number to '+91' when chat starts
  };

  const handleOptionClick = () => setStep(1);

  const handlePhoneSubmit = () => {
    if (phone.startsWith('+91') && phone.length >= 13) {
      setStep(2);
    } else {
      alert('Please enter a valid phone number starting with +91');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.startsWith('+91') || value === '+91') {
      setPhone(value);
    } else if (value.length <= 13) {
      setPhone(value);
    }
  };

  const handleCloseChat = () => {
    setOpen(false);  // Close the chat when the user opts out
  };

  return (
    <>
      <button 
        onClick={handleStart}
        className="fixed bottom-5 right-5 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 z-50"
      >
        Chat with us
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 bg-white rounded-lg shadow-xl p-4 w-80 z-50">
          {step === 0 && (
            <>
              <p className="text-black font-semibold mb-2">👋 What are you looking for?</p>
              <div className="space-y-2">
              <button onClick={handleOptionClick} className="w-full bg-gray-100 hover:bg-gray-200 text-left text-black px-3 py-2 rounded">
  How to adopt
</button>
<button onClick={handleOptionClick} className="w-full bg-gray-100 hover:bg-gray-200 text-left text-black px-3 py-2 rounded">
  Other
</button>
<button onClick={handleOptionClick} className="w-full bg-gray-100 hover:bg-gray-200 text-left text-black px-3 py-2 rounded">
  Type of query
</button>

              </div>
            </>
          )}
          {step === 1 && (
            <div className="space-y-2">
              <p className="text-black font-semibold">📞 Please enter your phone number (starting with +91):</p>
              <input 
                type="text" 
                value={phone}
                onChange={handlePhoneChange}  // Update value on change
                placeholder="+91..."
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                onClick={handlePhoneSubmit} 
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-green-600 font-semibold">✅ Thanks! Please wait, our team will reach out to you in 2 minutes.</p>
              <button 
                onClick={handleCloseChat} 
                className="w-full bg-red-400 hover:bg-red-300 text-black font-bold px-4 py-2 rounded mt-4"
              >
                Close Chat
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email && email.endsWith('@gmail.com')) {
      setSubscribed(true);
    } else {
      alert('Please enter a valid email address ending with @gmail.com');
    }
  };

  const handleCloseSubscribe = () => {
    setSubscribed(false);
  };

  return (
    <div>
      {/* Carousel Section */}
      <Carousel />

      {/* YouTube Video Section with background image */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `url('/img6.png')` }}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
          <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/UkR__HWV--E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full sm:w-1/2 px-4 p-6 text-black mt-10 sm:mt-0">
            <h2 className="text-2xl sm:text-4xl mb-4 italic font-cursive text-black animate__animated animate__zoomIn animate__delay-1s">
              Welcome A New Family Member
            </h2>
            <p className="text-lg sm:text-xl font-cursive font-bold text-black animate__animated animate__zoomIn animate__delay-2s">
              Stray and shelter animals do not ask for much. All they want is a second chance to live, love, and be loved. 
              If you are ready to open your loving heart and home and change a pet’s whole world, adopt today.
            </p>
          </div>
        </div>
      </section>

      {/* Section with img7.png background and compact layout */}
      <section className="bg-cover bg-center py-10" style={{ backgroundImage: `url('/img7.png')` }}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-white px-6">
          {/* Left Side: Image + Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-2/3 mb-6 sm:mb-0">
            <img src="/adopt.png" alt="Adopt Now" className="w-24 h-auto sm:mr-6 mb-4 sm:mb-0" />
            <div className="text-xs leading-relaxed">
              <p><strong>Location:</strong> CTS 166 / 167 Ashram, Madh – Marve Rd, Malad West, Mumbai, Maharashtra 400061, India</p>
              <p><strong>Phone:</strong> +91 9920 737 737</p>
              <p><strong>Email:</strong> getinvolved@amtmindia.org</p>
            </div>
          </div>
          {/* Right Side: Placeholder for Chat button — actual ChatBot below */}
        </div>
      </section>

      {/* Simulated ChatBot */}
      <ChatBot />

      {/* Yellow Background Email Subscription Section */}
      {!subscribed && (
        <section className="bg-yellow-400 py-8 relative bg-[url('/pawprint-pattern.png')] bg-repeat">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-black mb-4">Enter your email to stay updated!</h2>
            <input 
              type="email" 
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-3/4 sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 mb-4"
            />
            <button 
              onClick={handleSubscribe} 
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
            >
              Subscribe
            </button>
          </div>
        </section>
      )}

      {/* Success Message After Subscription */}
      {subscribed && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-green-500 font-bold mb-4">Subscribed Successfully!</h3>
            <button 
              onClick={handleCloseSubscribe} 
              className="bg-red-400 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
