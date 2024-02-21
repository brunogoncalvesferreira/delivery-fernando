const database = [
  {
    title: "Combo",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/combo.jpg",
    type: "Combos",
  },
  {
    title: "Combo",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/combo.jpg",
    type: "Combos",
  },
  {
    title: "Combo",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/combo.jpg",
    type: "Combos",
  },
  {
    title: "Combo",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/combo.jpg",
    type: "Combos",
  },
  {
    title: "Pizza",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/pizza.jpg",
    type: "Pizzas",
  },
  {
    title: "Pizza",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/pizza.jpg",
    type: "Pizzas",
  },
  {
    title: "Pizza",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/pizza.jpg",
    type: "Pizzas",
  },
  {
    title: "Pizza",
    description:
      "Pão especial, 2 Hambúrgueres de Picanha Bovina, Bacon, Maionese, Queijo Mussarela, Presunto, e Alface, Tomate, e Pepino.",
    price: 34.99,
    image: "./assets/pizza.jpg",
    type: "Pizzas",
  },
  {
    title: "Esfiha",
    description:
      "Esfiha Aberta deliciosa feita com MAGGI Caldo de Carne em Pó, NESTLÉ Requeijão Cremoso, carne moída, queijo branco, hortelã e farinha",
    price: 34.99,
    image: "./assets/esfiha.jpg",
    type: "Esfihas",
  },
  {
    title: "Esfiha",
    description:
      "Esfiha Aberta deliciosa feita com MAGGI Caldo de Carne em Pó, NESTLÉ Requeijão Cremoso, carne moída, queijo branco, hortelã e farinha",
    price: 34.99,
    image: "./assets/esfiha.jpg",
    type: "Esfihas",
  },
  {
    title: "Esfiha",
    description:
      "Esfiha Aberta deliciosa feita com MAGGI Caldo de Carne em Pó, NESTLÉ Requeijão Cremoso, carne moída, queijo branco, hortelã e farinha",
    price: 34.99,
    image: "./assets/esfiha.jpg",
    type: "Esfihas",
  },
  {
    title: "Esfiha",
    description:
      "Esfiha Aberta deliciosa feita com MAGGI Caldo de Carne em Pó, NESTLÉ Requeijão Cremoso, carne moída, queijo branco, hortelã e farinha",
    price: 34.99,
    image: "./assets/esfiha.jpg",
    type: "Esfihas",
  },
  {
    title: "Bebida",
    description: "Bebida super gelada.",
    price: 34.99,
    image: "./assets/coca.jpg",
    type: "Bebidas",
  },
  {
    title: "Bebida",
    description: "Bebida super gelada.",
    price: 34.99,
    image: "./assets/coca.jpg",
    type: "Bebidas",
  },
  {
    title: "Bebida",
    description: "Bebida super gelada.",
    price: 34.99,
    image: "./assets/coca.jpg",
    type: "Bebidas",
  },
  {
    title: "Bebida",
    description: "Bebida super gelada.",
    price: 34.99,
    image: "./assets/coca.jpg",
    type: "Bebidas",
  },
]

const listCardapio = document.getElementById("list")

const search = document.getElementById("search")

function fetchProducts() {
  database.forEach((product) => {
    listCardapio.innerHTML += `
            <div class="flex flex-col gap-2 bg-slate-200 rounded overflow-hidden p-2">   
              <div class="flex gap-2 justify-between md:gap-6">
                <div class="flex flex-col space-y-3">
                  <h3 class="text-slate-700 text-xl">${product.title}</h3>
                  <p class="flex-1 text-slate-600 text-sm">${product.description}</p>
                  <p class="text-xl text-slate-600 font-bold">R$ ${product.price}</p>
                </div>
                  <img
                    class="w-28 h-auto md:w-40 md:h-32 object-cover rounded-md"
                    src="${product.image}"
                    alt="Imagem ilustrativa dos nossos produtos"
                  />
              </div>
              <button class="w-full rounded-md bg-slate-900 hover:bg-slate-800 transition text-slate-50 font-bold py-4">
                Adicionar
              </button>
           </div>
`
  })
}

fetchProducts()

function handleFilterProduct(type) {
  listCardapio.innerHTML = ""

  if (type === "all") {
    database.forEach((product) => {
      return (listCardapio.innerHTML += `

            <div class="flex flex-col gap-2 bg-slate-200 rounded overflow-hidden p-2">   
              <div class="flex gap-2 justify-between md:gap-6">
                <div class="flex flex-col space-y-3">
                  <h3 class="text-slate-700 text-xl">${product.title}</h3>
                  <p class="flex-1 text-slate-600 text-sm">${product.description}</p>
                  <p class="text-xl text-slate-600 font-bold">R$ ${product.price}</p>
                </div>
                  <img
                    class="w-28 h-auto md:w-40 md:h-32 object-cover rounded-md"
                    src="${product.image}"
                    alt="Imagem ilustrativa dos nossos produtos"
                  />
              </div>
              <button class="w-full rounded-md bg-slate-900 hover:bg-slate-800 transition text-slate-50 font-bold py-4">
                Adicionar
              </button>
              `)
    })
  } else {
    const productsFiltered = database.filter((product) => {
      return product.type === type
    })

    productsFiltered.forEach((product) => {
      return (listCardapio.innerHTML += `

            <div class="flex flex-col gap-2 bg-slate-200 rounded overflow-hidden p-2">   
              <div class="flex gap-2 justify-between md:gap-6">
                <div class="flex flex-col space-y-3">
                  <h3 class="text-slate-700 text-xl">${product.title}</h3>
                  <p class="flex-1 text-slate-600 text-sm">${product.description}</p>
                  <p class="text-xl text-slate-600 font-bold">R$ ${product.price}</p>
                </div>
                  <img
                    class="w-28 h-auto md:w-40 md:h-32 object-cover rounded-md"
                    src="${product.image}"
                    alt="Imagem ilustrativa dos nossos produtos"
                  />
              </div>
              <button class="w-full rounded-md bg-slate-900 hover:bg-slate-800 transition text-slate-50 font-bold py-4">
                Adicionar
              </button>
              `)
    })
  }
}

search.addEventListener("change", (event) => {
  const searchValue = event.target.value

  if (searchValue === "") {
    fetchProducts()
  }

  const productsFiltered = database.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  listCardapio.innerHTML = ""

  productsFiltered.forEach((product) => {
    return (listCardapio.innerHTML += `
    
            <div class="flex flex-col gap-2 bg-slate-200 rounded overflow-hidden p-2">   
              <div class="flex gap-2 justify-between md:gap-6">
                <div class="flex flex-col space-y-3">
                  <h3 class="text-slate-700 text-xl">${product.title}</h3>
                  <p class="flex-1 text-slate-600 text-sm">${product.description}</p>
                  <p class="text-xl text-slate-600 font-bold">R$ ${product.price}</p>
                </div>
                  <img
                    class="w-28 h-auto md:w-40 md:h-32 object-cover rounded-md"
                    src="${product.image}"
                    alt="Imagem ilustrativa dos nossos produtos"
                  />
              </div>
              <button class="w-full rounded-md bg-slate-900 hover:bg-slate-800 transition text-slate-50 font-bold py-4">
                Adicionar
              </button>
              `)
  })
})
