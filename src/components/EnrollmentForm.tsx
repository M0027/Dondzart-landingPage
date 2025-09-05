import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface EnrollmentFormProps {
  onClose: () => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    level: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Formulário enviado com sucesso! Entraremos em contacto brevemente.');

    setTimeout(()=>{

      onClose(); // Close modal after submission
      handleWhatsAppRedirect()
    },3000)
    // Here you would typically send data to a backend or handle it.
  };

  const handleWhatsAppRedirect = () => {
    const message = `Olá Donzarte, gostaria de me inscrever. Meu nome é ${formData.name || '[Seu Nome]'}, tenho ${formData.age || '[Sua Idade]'} anos, meu contacto é ${formData.contact || '[Seu Contacto]'}. Tenho interesse no nível ${formData.level || '[Nível Desejado]'} e quero estudar inglês porque ${formData.reason || '[Seu Motivo]'}.`;
    const whatsappLink = `https://wa.me/258871818012?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="enrollment-form">
      <h2>Torne-se Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Idade:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contacto (Telefone/Email):</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="level">Nível Pretendido:</label>
          <select id="level" name="level" value={formData.level} onChange={handleChange} required>
            <option value="">Selecione um nível</option>
            <option value="Nivel 1">Nível 1 (Iniciante)</option>
            <option value="Nivel 2">Nível 2 (Básico)</option>
            <option value="Nivel 3">Nível 3 (Intermédio)</option>
            <option value="Nivel 4">Nível 4 (Avançado)</option>
            <option value="Nivel 5">Nível 5 (Fluente)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reason">Porque quer estudar Inglês?</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} rows={4} required></textarea>
        </div>
        <button type="submit" className="btn-primary">Enviar Inscrição</button>
      </form>
      <button onClick={handleWhatsAppRedirect} className="btn-whatsapp">
        Falar no WhatsApp <FaWhatsapp />
      </button>
    </div>
  );
};

export default EnrollmentForm;
