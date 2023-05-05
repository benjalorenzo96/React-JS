export const categories = [
  "Cuadro de Fútbol",
  "Cuadro de Camisetas",
  "Cuadro de Próceres Futbolísticos",
];


export const getItems = async () => {
  return [
    {
      id: 1,
      name: "Cuadro de Racing Club",
      description: "Cuadro de Racing Club hecho a mano.",
      price: 150,
      category: "cuadros-de-futbol",
      image: "https://example.com/racingclub.jpg",
    },
    {
      id: 2,
      name: "Cuadro de Temperley",
      description: "Cuadro de Temperley hecho a mano.",
      price: 170,
      category: "cuadros-de-futbol",
      image: "https://example.com/temperley.jpg",
    },
    {
      id: 3,
      name: "Cuadro de Diego Maradona",
      description: "Cuadro de Diego Maradona hecho a mano.",
      price: 200,
      category: "proceres-futbolisticos",
      image: "https://example.com/maradona.jpg",
    },
    {
      id: 4,
      name: "Cuadro de Pelé",
      description: "Cuadro de Pelé hecho a mano.",
      price: 190,
      category: "proceres-futbolisticos",
      image: "https://example.com/pele.jpg",
    },
    {
      id: 5,
      name: "Cuadro de camiseta de Racing Club",
      description: "Cuadro de camiseta de Racing Club hecho a mano.",
      price: 120,
      category: "cuadros-de-camisetas",
      image: "https://example.com/racingclub.jpg",
    },
    {
      id: 6,
      name: "Cuadro de camiseta del Inter",
      description: "Cuadro de camiseta del Inter hecho a mano.",
      price: 130,
      category: "cuadros-de-camisetas",
      image: "https://example.com/inter.jpg",
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



