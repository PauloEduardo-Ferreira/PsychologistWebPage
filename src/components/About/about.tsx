import React from 'react';
import '../About/about.css'
import psi from '../Imgs/psi.jpg'

const About = () => {
  return (
    <section id="about" className="container">
      <h2>Sobre mim:</h2>
      <img src={psi} alt="psi" className="psiImg" />

      <p>
        Juliana Ros Monteiro é uma psicóloga especializada em TCC (Terapia
        Cognitivo-Comportamental) é <br />
        uma profissional que trata pacientes com transtornos mentais e emocionais.
      </p>
      <h2>O que seria TCC (Terapia Cognitivo-Comportamental)?</h2>
      <p>
        A Terapia Cognitivo-Comportamental (TCC) é uma forma de psicoterapia que
        se baseia no conhecimento científico da psicologia.
        <br /> Ela é uma abordagem terapêutica que se concentra na resolução de
        problemas atuais e na modificação de pensamentos e comportamentos
        disfuncionais.
      </p>
      <h3>A TCC pode ser indicada para tratar:</h3>
      <p>
        Depressão, Ansiedade, Transtornos alimentares, Dependência química,
        Fobias, Transtorno obsessivo-compulsivo (TOC).
      </p>
    </section>
    );
};

export default About;