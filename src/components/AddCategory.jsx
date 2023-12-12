import React, { useState } from 'react';
import { createCategory } from '../service/api';

const AddCategoryForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Enviar os dados para a API
    const userName = 'Ivan';
    createCategory( userName, name, description )
      .then((result) => {
        console.log(result);
        alert('Categoria criada com sucesso!');
      }).catch((error) => {
        console.log(error);
        alert('Erro ao criar categoria!');
        });
    
    // Limpar o formulário após a submissão
    setName('');
    setDescription('');
  }

  return (
    <div>
    	<h2>Adicionar Nova Categoria</h2>

	    <form onSubmit={handleSubmit}>
	      <label htmlFor="name">Nome:</label><br />
	      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} /><br />

	      <label htmlFor="description">Descrição:</label><br />
	      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} /><br />

	      <button type="submit">Adicionar</button>
	    </form>
    </div>
  );
}

export default AddCategoryForm;