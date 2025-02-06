import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2>Contato</h2>
      <form>
        <div className="styleName">
          <label htmlFor="name">Nome:</label>
          <input className="boxName" type="text" id="name" name="name" required />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            className="boxEmail"
            type="email"
            id="email"
            name="email"required/>
        </div>
        <div className="Message">
          <label htmlFor="message">Mensagem:</label>
          <textarea className="boxMessage" id="message" name="message" required></textarea>
        </div>
        <button className="btnEnviar" type="submit">Enviar</button>
      </form>
    </section>
  );
  };

  export default Contact;