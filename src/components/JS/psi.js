import React, { useState } from 'react';

const FormularioContato = () => {
    // Estado para armazenar os valores dos campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função para validar o formulário
    const validarFormularioContato = (event) => {
        event.preventDefault(); // Impede o envio do formulário

        if (nome === '' || email === '' || mensagem === '') {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        // Verificação simples de formato de email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return false;
        }

        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar a lógica para enviar o formulário
        return true;
    };

    return (
        <form id="formContato" onSubmit={validarFormularioContato}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioContato;