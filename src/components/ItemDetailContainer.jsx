import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetail } from '../mockData'; // Importa la función fetchItemDetail

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de la carga del detalle del producto
    const asyncMock = async () => {
      const data = await fetchItemDetail(itemId);
      setItem(data);
    };
    asyncMock();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>ID: {item.id}</p>
          <p>Categoría: {item.category}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
