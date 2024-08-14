import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from '../mockData'; // Importa la función fetchItems

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de la carga de productos basados en la categoría
    const asyncMock = async () => {
      const data = await fetchItems(categoryId);
      setItems(data);
    };
    asyncMock();
  }, [categoryId]);

  return (
    <div>
      <h2>Productos en {categoryId}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

