export const getItems = async () => {
    return [
      {
        id: 1,
        name: "Producto 1",
        price: 10.99,
        image: "https://via.placeholder.com/150",
        description: "Descripción del producto 1",
      },
      {
        id: 2,
        name: "Producto 2",
        price: 20.99,
        image: "https://via.placeholder.com/150",
        description: "Descripción del producto 2",
      },
      {
        id: 3,
        name: "Producto 3",
        price: 30.99,
        image: "https://via.placeholder.com/150",
        description: "Descripción del producto 3",
      },
    ];
};

export const getCategories = async () => {
  return [
    {
      id: 1,
      name: "Categoría 1",
    },
    {
      id: 2,
      name: "Categoría 2",
    },
    {
      id: 3,
      name: "Categoría 3",
    },
  ];
};
