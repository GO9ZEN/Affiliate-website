const products = [
    {
        '_id': 'P-1',
        'name': 'Airpods Wireless Bluetooth Headphones',
        'image': 'arch-product-images/airpods.jpg',

        'image1': 'arch-product-images/airpods.jpg',
        'image2': 'arch-product-images/camera.jpg',
        'image3': 'arch-product-images/playstation.jpg',
        'image4': 'arch-product-images/mouse.jpg',

        'description':
          'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
        'brand': 'Apple',
        'category': 'Electronics',
        'price': 89.99,
        'countInStock': 10,
        'rating': "4.5",
        'numReviews': 12,
        'numSold': 12,
      },
      {
        '_id': 'P-2',
        'name': 'iPhone 11 Pro 256GB Memory',
        'image': 'arch-product-images/phone.jpg',

        'image1': 'arch-product-images/phone.jpg',
        'image2': 'arch-product-images/camera.jpg',
        'image3': 'arch-product-images/playstation.jpg',
        'image4': 'arch-product-images/mouse.jpg',

        'description':
          'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        'brand': 'Apple',
        'category': 'Electronics',
        'price': 599.99,
        'countInStock': 7,
        'rating': "4.0",
        'numReviews': 8,
        'numSold': 20,
      },
      {
        '_id': 'P-3',
        'name': 'Cannon EOS 80D DSLR Camera',
        'image': 'arch-product-images/camera.jpg',

        'image1': 'arch-product-images/camera.jpg',
        'image2': 'arch-product-images/phone.jpg',
        'image3': 'arch-product-images/playstation.jpg',
        'image4': 'arch-product-images/mouse.jpg',

        'description':
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        'brand': 'Cannon',
        'category': 'Electronics',
        'price': 929.99,
        'countInStock': 5,
        'rating': "3.0",
        'numReviews': 12,
        'numSold': 1,
      },
      {
        '_id': 'P-4',
        'name': 'Sony Playstation 4 Pro White Version',
        'image': 'arch-product-images/playstation.jpg',

        'image1': 'arch-product-images/playstation.jpg',
        'image2': 'arch-product-images/camera.jpg',
        'image3': 'arch-product-images/phone.jpg',
        'image4': 'arch-product-images/mouse.jpg',

        'description':
          'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        'brand': 'Sony',
        'category': 'Electronics',
        'price': 399.99,
        'countInStock': 11,
        'rating': "5.0",
        'numReviews': 12,
        'numSold': 18,
      },
      {
        '_id': 'P-5',
        'name': 'Logitech G-Series Gaming Mouse',
        'image': 'arch-product-images/mouse.jpg',

        'image1': 'arch-product-images/mouse.jpg',
        'image2': 'arch-product-images/phone.jpg',
        'image3': 'arch-product-images/playstation.jpg',
        'image4': 'arch-product-images/camera.jpg',

        'description':
          'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        'brand': 'Logitech',
        'category': 'Electronics',
        'price': 49.99,
        'countInStock': 7,
        'rating': "3.5",
        'numReviews': 10,
        'numSold': 25,
      },
      {
        '_id': 'P-6',
        'name': 'Amazon Echo Dot 3rd Generation',
        'image': 'arch-product-images/alexa.jpg',

        'image1': 'arch-product-images/alexa.jpg',
        'image2': 'arch-product-images/phone.jpg',
        'image3': 'arch-product-images/playstation.jpg',
        'image4': 'arch-product-images/mouse.jpg',

        'description':
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        'brand': 'Amazon',
        'category': 'Electronics',
        'price': 29.99,
        'countInStock': 0,
        'rating': "4.0",
        'numReviews': 12,
        'numSold': 33,
      },
      {
          '_id': 'P-7',
          'name': 'Amazon Echo Dot 3rd Generation',
          'image': 'arch-product-images/camera.jpg',

          'image1': 'arch-product-images/camera.jpg',
          'image2': 'arch-product-images/phone.jpg',
          'image3': 'arch-product-images/playstation.jpg',
          'image4': 'arch-product-images/mouse.jpg',

          'description':
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
          'brand': 'Amazon',
          'category': 'Electronics',
          'price': 29.99,
          'countInStock': 0,
          'rating': "1.5",
          'numReviews': 12,
          'numSold': 2,
        },
        {
          '_id': 'P-8',
          'name': 'Amazon Echo Dot 3rd Generation',
          'image': 'arch-product-images/alexa.jpg',

          'image1': 'arch-product-images/alexa.jpg',
          'image2': 'arch-product-images/phone.jpg',
          'image3': 'arch-product-images/playstation.jpg',
          'image4': 'arch-product-images/mouse.jpg',

          'description':
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
          'brand': 'Amazon',
          'category': 'Electronics',
          'price': 29.99,
          'countInStock': 0,
          'rating': "4.0",
          'numReviews': 12,
          'numSold': 11,
        },
        {
          '_id': 'P-9',
          'name': 'Amazon Echo Dot 3rd Generation',
          'image': 'arch-product-images/camera.jpg',

          'image1': 'arch-product-images/camera.jpg',
          'image2': 'arch-product-images/phone.jpg',
          'image3': 'arch-product-images/playstation.jpg',
          'image4': 'arch-product-images/mouse.jpg',

          'description':
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
          'brand': 'Amazon',
          'category': 'Electronics',
          'price': 29.99,
          'countInStock': 0,
          'rating': "2.0",
          'numReviews': 12,
          'numSold': 16,
        },
        {
          '_id': 'P-10',
          'name': 'Amazon Echo Dot 3rd Generation',
          'image': 'arch-product-images/alexa.jpg',

          'image1': 'arch-product-images/alexa.jpg',
          'image2': 'arch-product-images/phone.jpg',
          'image3': 'arch-product-images/playstation.jpg',
          'image4': 'arch-product-images/mouse.jpg',

          'description':
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
          'brand': 'Amazon',
          'category': 'Electronics',
          'price': 29.99,
          'countInStock': 0,
          'rating': "2.5",
          'numReviews': 12,
          'numSold': 9,
        },
]

export default products;