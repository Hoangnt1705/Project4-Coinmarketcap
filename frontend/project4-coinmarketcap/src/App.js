import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyADD7SOk6lYqXZczh--7rydg7LR4Mj9OYM",
    authDomain: "project-4-64893.firebaseapp.com",
    projectId: "project-4-64893",
    storageBucket: "project-4-64893.appspot.com",
    messagingSenderId: "265891814289",
    appId: "1:265891814289:web:15747ca5a313e1442ed830",
    measurementId: "G-ND7TVZPFRN"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage auth={auth} signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
          <Route path="/register" element={<Register auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
