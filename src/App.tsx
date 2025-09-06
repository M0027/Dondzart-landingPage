import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import EnrollmentForm from './components/EnrollmentForm';
import WhatsappBotton from './components/WhatshapBottom';

function App() {
  // const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header />
      <main>
        <Hero openModal={openModal} />
        <Courses />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EnrollmentForm onClose={closeModal} />
      </Modal>
      <WhatsappBotton/>
    </div>
  );
}

export default App;
