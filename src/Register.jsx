import React, { useState, useEffect } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email ends with '@gmail.com'
    if (!email.endsWith('@gmail.com')) {
      setMessage('Please enter a valid Gmail address');
      return;
    }

    // Register the user
    setMessage('Registered successfully!');
    setIsRegistered(true);

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const styles = {
    registerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("./img6.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    registerForm: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '200px', // smaller width
      fontSize: '12px', // smaller font
    },
    inputGroup: {
      marginBottom: '10px',
      textAlign: 'left',
      color: 'black',
      fontSize: '12px',
    },
    input: {
      width: '100%',
      padding: '6px',
      marginTop: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: '#000',
      fontSize: '12px',
    },
    button: {
      padding: '8px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '12px',
      cursor: 'pointer',
      borderRadius: '4px',
      width: '100%',
    },
    message: {
      marginTop: '10px',
      color: '#ff0000',
      fontWeight: 'bold',
      fontSize: '12px',
    },
    heading: {
      color: 'brown',
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.registerContainer}>
      <div style={styles.registerForm}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password</label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button style={styles.button} type="submit">Register</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default Register;
