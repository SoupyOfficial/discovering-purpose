import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, submitResearch } from '../Firebase';
import 'firebase/firestore';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', href: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitResearch(formData)    
    setFormData({ title: '', href: '', content: '' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
       
  } 

  const handleLogout = () => {        
    if(user)
      signOut(auth).then(() => {
      // Sign-out successful.
          setUser(null);
          console.log("Signed out successfully")
          navigate("/");
      }).catch((error) => {
      // An error happened.
        console.error(error)
      });
  }
  
  return (
    user == null ?
    <form>
      <h2>Admin Login</h2>
        <div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button onClick={onLogin}>Login</button>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}          </div>
    </form>
    :
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the dashboard! You are now logged in.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="href"
          placeholder="Link to Article"
          value={formData.href}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Admin;