const productos = [
    {
      id: "Adff21",
      nombre: "Pedigree Adulto",
      descripcion: "Sabor carne, pollo y cereales - Alimento 100% completo y balanceado para perros adultos",
      stock: 5,
      categoria: "alimentos",
      imagen: "/img/pedigree_adulto.png",
      precio: 3000
    },
    {
      id: "Gjmn222",
      nombre: "Dog Chow",
      descripcion: "En cada croqueta encontrarás un alimento 100% balanceado, con probióticos naturales que equilibran su flora intestinal, omegas 6 y 3 y niveles de sodio adecuados.",
      stock: 10,
      categoria: "alimentos",
      imagen: "",
      precio: 2500
    },
    {
      id: "Lom222",
      nombre: "Juguete Pelota Para Perros",
      descripcion: "Los juguetes para perros Dura Play también vienen en una variedad de tamaños y colores: pelota y un anillo doble con bola. En cada paquete encontraras 3 colores diferentes",
      stock: 21,
      categoria: "accesorios y juguetes",
      imagen: "/img/pelotapara_perro_colores",
      precio: 5000
    },
    {
      id: "Htm123",
      nombre: "Purina : Pro Plan",
      descripcion: "Es una comida para que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad. Esta fórmula ofrece, a través de sus sabrosas croquetas, un contenido rico en proteínas (26%) y grasas (15%), utilizando como ingrediente principal carne fresca de pollo, que ayuda a los perros a mantener la masa corporal magra y músculos fuertes.",
      stock: 3,
      categoria: "alimentos",
      imagen: "/img/purina-pro-plan-perros-adult-razas-mediana.png",
      precio: 4000
    },
    {
      id: "Jfw222",
      nombre: "Collarin de Paseo",
      descripcion: "Collar de Nylon para paseo",
      stock: 1,
      categoria: "accesorios y juguetes",
      imagen: "/img/collar-de-nylon.jpg",
      precio: 2200
    },
    {
      id: "Gtm222",
      nombre: "Bulldog",
      descripcion: "Pequeño bulldog de 3 años",
      stock: 3,
      categoria: "adopciones",
      imagen: "/img/bulldog.png",
      precio: "Adoptame!"
    },
    {
      id: "Gtm221",
      nombre: "Chiwuawua",
      descripcion: "Tierno y gracioso chiwuawua, de 2 años.",
      stock: 3,
      categoria: "adopciones",
      imagen: "/img/chiwuawua.jpg",
      precio: "Adoptame!"
    },
    {
      id: "Gtm566",
      nombre: "Dalmata",
      descripcion: "Raza dalmata de 4 años",
      stock: 5,
      categoria: "adopciones",
      imagen: "/img/dalmata.png",
      precio: "Adoptame!"
    },
    {
      id: "Tmy543",
      nombre: "Cachorro de Labrador",
      descripcion: "Este pequeño cachorro de solo 5 meses, muy tienro y astuto.",
      stock: 6,
      categoria: "adopciones",
      imagen: "/img/cachorro_labrador.png",
      precio: "Adoptame!"
    },
    {
      id: "Tmy545",
      nombre: "Cachupin",
      descripcion: "Este alimento seco para perro adulto de 25 kg sabor carne y arroz, proporciona todo lo necesario para que tu perro crezca fortalecido",
      stock: 7,
      categoria: "alimentos",
      imagen: "/img/cachupin_comida.webp",
      precio: 2500
    },
    {
      id: "Tmy546",
      nombre: "Jueguete de Hueso",
      descripcion: "Juguete para perros con forma de hueso",
      stock: 30,
      categoria: "accesorios y juguetes",
      imagen: "/img/juguete_formadehueso",
      precio: 1500
    },
    {
      id: "Tmy547",
      nombre: "Cepillo para peinar",
      descripcion: "Cepillo para peinar a perro, utilizalo en seco o durante su baño.",
      stock: 15,
      categoria: "accesorios y juguetes",
      imagen: "/img/cepilloperro_para_peinar",
      precio: 750
    }
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 1000)
    })
  }
  
  export { obtenerProductos }