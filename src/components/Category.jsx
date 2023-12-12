import React, { useState, useEffect } from 'react';
import { getCategories } from '../service/api';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
        .then((result) => {
            setCategories(result.resposta);
        }).catch((error) => {
            console.log(error);
            alert('Erro ao carregar categorias!');
        });
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name} : {category.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;