import React, { useState } from 'react';

const FormularioContato = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    contacto: '',
    mensagem: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Lógica para enviar o formulário, por exemplo, chamar uma função prop
    console.log('Enviando formulário:', formulario);
    // Limpar os campos após o envio (se desejado)
    setFormulario({
      nome: '',
      contacto: '',
      mensagem: '',
    });
  };

  return (
    <div className='border border-gray-700 bg-gradient-to-tl from-gray-700/70 via-gray-600/60 to-gray-800/90 select-none p-6 rounded-2xl'>
      <form onSubmit={handleSubmit}>
        <div className='w-full px-6 flex flex-col mb-2'>
          <div>
            <img src="\images\websiteImages\vrwhite_logo.png" alt="Logo da empresa no formulário" />
            <h4 className='font-bold mb-4 text-white'>Envie Mensagem!</h4>
          </div>
          <label className='font-bold text-white' htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder='Inserir Nome'
            className='rounded-lg bg-gray-800 text-white focus:bg-white focus:text-black'
            value={formulario.nome}
            onChange={handleChange}
          />
        </div>

        <div className='w-full px-6 flex flex-col mb-2'>
          <label className='font-bold text-white' htmlFor="contato">Contato:</label>
          <input
            type="text"
            id="contato"
            name="contato"
            placeholder='Inserir Contato'
            className='rounded-lg bg-gray-800 text-white focus:bg-white focus:text-black'
            value={formulario.contacto}
            onChange={handleChange}
          />
        </div>

        <div className='w-full px-6 flex flex-col mb-4'>
          <label className='font-bold text-white' htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder='Inserir Mensagem'
            className='rounded-lg bg-gray-800 text-white focus:bg-white focus:text-black'
            value={formulario.mensagem}
            onChange={handleChange}
          />
        </div>

        <div className='flex justify-end px-6'>
          <button className='border-[1px] border-gray-600 py-1 px-5 rounded-full bg-gray-800 text-white' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioContato;
