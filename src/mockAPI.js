export const categories = [
  "Cuadro",
  "Cuadro de Fútbol",
  "Cuadro de Camisetas",
  "Cuadro de Próceres Futbolísticos",
];


export const getItems = async () => {
  return [
    {
      id: 1,
      name: "Producto 1",
      price: 10.99,
      image: "https://via.placeholder.com/150",
      description: "Descripción del producto 1",
      category: "Cuadro",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 20.99,
      image: "https://via.placeholder.com/150",
      description: "Descripción del producto 2",      
      category: "Cuadro",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 30.99,
      image: "https://via.placeholder.com/150",
      description: "Descripción del producto 3",
      category: "Cuadro",
    },
  ];
};

export const getItemsByCategory = async (categoryId) => {
  const items = await getItems();
  return items.filter((item) => item.category === categoryId);
};

export const getItemById = async (itemId) => {
  const items = await getItems();
  return items.find((item) => item.id === itemId);
};

export const getCategories = async () => {
  return categories;
};



