export const products = [
    {
      id: 1,
      image: [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/8141ba076c724279a8c54b0918e95bae_9366/ID9853_01_standard.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/cf7471b8ae9c48b7977a8de1d3d368c5_9366/IF1204_01_standard.jpg",
      ],
      name: "Product 1",
      description: "This is the first product.",
      price: 29.99,
      sizes: ["S", "M", "L", "XL"], // Added sizes
    },
    {
      id: 2,
      name: "Product 2",
      image: [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/cf7471b8ae9c48b7977a8de1d3d368c5_9366/IF1204_01_standard.jpg",
      ],
      description: "This is the second product.",
      price: 39.99,
      sizes: ["M", "L"], // Added sizes
    },
    {
      id: 3,
      name: "Product 3",
      image: [
        "https://assets.adidas.com/images/w_940,f_auto,q_auto/9c06aa384a5c4440aa85a34bfaa157ca_9366/IE0526_01_standard.jpg",
      ],
      description: "This is the third product.",
      price: 49.99,
      sizes: ["S", "M", "L", "XL"], // Added sizes
    },
    {
      id: 4,
      name: "Product 4",
      image: [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b212fd20c458426fb46f8837465ed812_9366/IE9689_01_standard.jpg",
      ],
      description: "This is the fourth product.",
      price: 49.99,
      sizes: ["S", "M"], // Added sizes
    },
    {
      id: 5,
      name: "Product 5",
      image: [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/0ccbff089f26446d9789026eb91b8f68_9366/IG3640_01_standard.jpg",
      ],
      description: "This is the fifth product.",
      price: 49.99,
      sizes: ["L", "XL"], // Added sizes
    },
  
  
  
  /*  
    {
      "id": "67d93ca74b4b4e4f3abcba29",
      "brand": "Puma",
      "model": "RS-X Bold",
      "shoeWearer": "Kids",
      "shoeType": "Sneaker",
      "price": 90,
      "variants": [
          {
              "color": "Blue",
              "sizes": [
                  {
                      "size": 3,
                      "stock": 10,
                      "_id": "67d93ca74b4b4e4f3abcba2b"
                  },
                  {
                      "size": 4,
                      "stock": 8,
                      "_id": "67d93ca74b4b4e4f3abcba2c"
                  },
                  {
                      "size": 5,
                      "stock": 5,
                      "_id": "67d93ca74b4b4e4f3abcba2d"
                  }
              ],
              "imageURL": "https://m.media-amazon.com/images/I/71wHD1p3tsL._AC_SY500_.jpg",
              "_id": "67d93ca74b4b4e4f3abcba2a"
          },
          {
              "color": "Red",
              "sizes": [
                  {
                      "size": 3,
                      "stock": 6,
                      "_id": "67d93ca74b4b4e4f3abcba2f"
                  },
                  {
                      "size": 4,
                      "stock": 4,
                      "_id": "67d93ca74b4b4e4f3abcba30"
                  }
              ],
              "imageURL": "https://cdn.media.amplience.net/i/office/4998550026_sd1.jpg?$newhighres$&fmt=auto&qlt=default&fmt.jpeg.interlaced=true",
              "_id": "67d93ca74b4b4e4f3abcba2e"
          }
      ],
      "sales_count": 12,
      "description": "The Puma RS-X Bold is a stylish and comfortable sneaker designed for active kids who love to play.",
      "availability": true,
      "__v": 0
  },

  {
    "id": "67d93ca74b4b4e4f3abcba29",
    "brand": "Puma",
    "model": "RS-X Bold",
    "shoeWearer": "Kids",
    "shoeType": "Sneaker",
    "price": 90,
    "variants": [
        {
            "color": "Blue",
            "sizes": [
                {
                    "size": 3,
                    "stock": 10,
                    "_id": "67d93ca74b4b4e4f3abcba2b"
                },
                {
                    "size": 4,
                    "stock": 8,
                    "_id": "67d93ca74b4b4e4f3abcba2c"
                },
                {
                    "size": 5,
                    "stock": 5,
                    "_id": "67d93ca74b4b4e4f3abcba2d"
                }
            ],
            "imageURL": "https://cdn.media.amplience.net/i/office/4998550026_sd1.jpg?$newhighres$&fmt=auto&qlt=default&fmt.jpeg.interlaced=true",
            "_id": "67d93ca74b4b4e4f3abcba2a"
        },
        {
            "color": "Red",
            "sizes": [
                {
                    "size": 3,
                    "stock": 6,
                    "_id": "67d93ca74b4b4e4f3abcba2f"
                },
                {
                    "size": 4,
                    "stock": 4,
                    "_id": "67d93ca74b4b4e4f3abcba30"
                }
            ],
            "imageURL": "https://cdn.media.amplience.net/i/office/4998550026_sd1.jpg?$newhighres$&fmt=auto&qlt=default&fmt.jpeg.interlaced=true",
            "_id": "67d93ca74b4b4e4f3abcba2e"
        }
    ],
    "sales_count": 12,
    "description": "The Puma RS-X Bold is a stylish and comfortable sneaker designed for active kids who love to play.",
    "availability": true,
    "__v": 0
    },

    {
      "id": "67d93ca74b4b4e4f3abcba29",
      "brand": "Puma",
      "model": "RS-X Bold",
      "shoeWearer": "Kids",
      "shoeType": "Sneaker",
      "price": 90,
      "variants": [
          {
              "color": "Blue",
              "sizes": [
                  {
                      "size": 3,
                      "stock": 10,
                      "_id": "67d93ca74b4b4e4f3abcba2b"
                  },
                  {
                      "size": 4,
                      "stock": 8,
                      "_id": "67d93ca74b4b4e4f3abcba2c"
                  },
                  {
                      "size": 5,
                      "stock": 5,
                      "_id": "67d93ca74b4b4e4f3abcba2d"
                  }
              ],
              "imageURL": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c8a41a8efe147b4bff217b74d293978_9366/JI0183_01_00_standard.jpg",
              "_id": "67d93ca74b4b4e4f3abcba2a"
          },
          {
              "color": "Red",
              "sizes": [
                  {
                      "size": 3,
                      "stock": 6,
                      "_id": "67d93ca74b4b4e4f3abcba2f"
                  },
                  {
                      "size": 4,
                      "stock": 4,
                      "_id": "67d93ca74b4b4e4f3abcba30"
                  }
              ],
              "imageURL": "https://cdn.media.amplience.net/i/office/4998550026_sd1.jpg?$newhighres$&fmt=auto&qlt=default&fmt.jpeg.interlaced=true",
              "_id": "67d93ca74b4b4e4f3abcba2e"
          }
      ],
      "sales_count": 12,
      "description": "The Puma RS-X Bold is a stylish and comfortable sneaker designed for active kids who love to play.",
      "availability": true,
      "__v": 0
  },

  {
    "id": "67d93ca74b4b4e4f3abcba29",
    "brand": "Puma",
    "model": "RS-X Bold",
    "shoeWearer": "Kids",
    "shoeType": "Sneaker",
    "price": 90,
    "variants": [
        {
            "color": "Blue",
            "sizes": [
                {
                    "size": 3,
                    "stock": 10,
                    "_id": "67d93ca74b4b4e4f3abcba2b"
                },
                {
                    "size": 4,
                    "stock": 8,
                    "_id": "67d93ca74b4b4e4f3abcba2c"
                },
                {
                    "size": 5,
                    "stock": 5,
                    "_id": "67d93ca74b4b4e4f3abcba2d"
                }
            ],
            "imageURL": "https://assets.adidas.com/images/w_940,f_auto,q_auto/4f119a28dd4d4ab9bb45ecf379221343_9366/IG8319_HM1.jpg",
            "_id": "67d93ca74b4b4e4f3abcba2a"
        },
        {
            "color": "Red",
            "sizes": [
                {
                    "size": 3,
                    "stock": 6,
                    "_id": "67d93ca74b4b4e4f3abcba2f"
                },
                {
                    "size": 4,
                    "stock": 4,
                    "_id": "67d93ca74b4b4e4f3abcba30"
                }
            ],
            "imageURL": "https://cdn.media.amplience.net/i/office/4998550026_sd1.jpg?$newhighres$&fmt=auto&qlt=default&fmt.jpeg.interlaced=true",
            "_id": "67d93ca74b4b4e4f3abcba2e"
        }
    ],
    "sales_count": 12,
    "description": "The Puma RS-X Bold is a stylish and comfortable sneaker designed for active kids who love to play.",
    "availability": true,
    "__v": 0
}
*/

  ];