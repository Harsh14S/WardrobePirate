let Users = [
  {
    id: 1,
    name: 'Luffy',
    img: require('./Luffy.jpg'),
    password: "",
    cart: {
      productID: [],
      bill: {
        "subTotal": 0,
        "FeeDelivery": 0,
        "discount": 0,
        "total": 0,
      },
    },
  },
  {
    id: 2,
    name: 'Asta',
    img: require('./Asta.jpg'),
    password: "",
    cart: {
      productID: [],
      bill: {
        "subTotal": 0,
        "FeeDelivery": 0,
        "discount": 0,
        "total": 0,
      },
    },
  },
]

export default Users
