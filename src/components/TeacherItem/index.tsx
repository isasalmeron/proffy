import React from 'react';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/23709852?s=460&u=487aff6baf3c712c6d0d680222cf10e837e0c1a5&v=4" alt="Isabela Salmeron"/>
        <div>
          <strong>Isabela Salmeron</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
