import React from "react";

const WhatsappBotton: React.FC = () => {

  const handlerSaberMais= () => {
    const message = `Olá Dondzart, gostaria de saber Mais sobre a preparacao para exames da dondzart.`;
    const whatsappLink = `https://wa.me/258871818012?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    // <div className="whatshapBotton-container">
      <button onClick={handlerSaberMais} className="whatshapBotton">
        Saber mais sobre preparação para exames
      </button>
    //
  );
}

export default WhatsappBotton;
