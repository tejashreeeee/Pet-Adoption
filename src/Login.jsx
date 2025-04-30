import React, { useState } from 'react';
import 'animate.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubscribe = () => {
    if (email && email.endsWith('@gmail.com')) {
      setSubscribed(true);
    } else {
      setError('Please enter a valid email ending with @gmail.com');
    }
  };

  const handleCloseSubscribe = () => {
    setSubscribed(false);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/img8.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '60px 20px',
      }}
    >
      <div
        className="animate__animated animate__fadeInDown"
        style={{
          backgroundImage: 'url(/img6.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '25px',
          borderRadius: '12px',
          border: '2px solid black',
          boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '300px',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        <h2
          style={{
            fontSize: '1rem',
            marginBottom: '12px',
            fontWeight: '500',
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '4px',
            borderRadius: '4px',
          }}
        >
          Login to your account
        </h2>
        <form>
          <input
            type="text"
            placeholder="Email or Phone Number"
            required
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '0.9rem',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '0.9rem',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.9rem',
              marginTop: '10px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
        <div style={{ marginTop: '12px' }}>
          <a
            href="#"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontSize: '0.8rem',
            }}
          >
            Forgot Password?
          </a>
        </div>
        <div style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '0.8rem' }}>New here?</p>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </div>
      </div>

      {/* Email Subscription Section */}
      <div style={{ backgroundColor: '#FFD700', padding: '20px', borderRadius: '10px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 className="text-2xl font-semibold mb-4 text-black">Enter your email to stay updated!</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="w-3/4 sm:w-1/2 px-4 py-2 rounded-md border border-gray-300 mb-4"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleSubscribe}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          Subscribe
        </button>
      </div>

      {/* Subscription Success Message */}
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
};

export default Login;
