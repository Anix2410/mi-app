// src/mockData.js
export const fetchItems = async (categoryId) => {
    const mockItems = [
      { id: 1, name: 'Auto 1', category: 'vehiculos' },
      { id: 2, name: 'Auto 2', category: 'vehiculos' },
      { id: 3, name: 'Licuadora 1', category: 'electrodomesticos' },
    ];
    return mockItems.filter(item => item.category === categoryId);
  };
  
  export const fetchItemDetail = async (itemId) => {
    const mockItems = [
      { id: 1, name: 'Auto 1', category: 'vehiculos' },
      { id: 2, name: 'Auto 2', category: 'vehiculos' },
      { id: 3, name: 'Licuadora 1', category: 'electrodomesticos' },
    ];
    return mockItems.find(item => item.id === parseInt(itemId));
  };
  