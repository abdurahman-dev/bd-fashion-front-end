const products = [
  {
    id: 'abc_010',
    name: 'C Eco Aware Organic Cotton top',
    slug: 'c-eco-aware-organic-cotton-top-ab',
    price: 20,
    category: '002', //id of category
    rating: 5,
    stock: '5',
    discount: '0',
    subCategory: 'Cloth', //id of a category but it will be subcategory
    reviews: [],
    brand: 'Boom',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_011',
    name: 'Z Classic one-breasted jacket',
    slug: 'z-classic-one-breasted-jacket-ac',
    price: 10,
    category: '003',
    rating: 2,
    stock: '0',
    discount: '10',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags: {
      onSale: false,
      new: true,
      flashSale: false,
      recommended: false,
      trending: false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_012',
    name: 'Z Eco Aware Organic Cotton top Model-GH',
    slug: 'z-e-eco-aware-organic-cotton-ad',
    price: 25,
    category: '002',
    rating: 5,
    stock: '5',
    discount: '5',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: false,
      new: false,
      flashSale: true,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_013',
    name: 'B Classic one-breasted jacket',
    slug: 'b-classic-one-breasted-jacket-af',
    price: 50,
    category: '001',
    rating: 4,
    stock: '5',
    discount: '10',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags: {
      onSale: true,
      new: false,
      flashSale: false,
      recommended: false,
      trending: false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_014',
    name: 'O Eco Aware Organic Cotton top Small-GH',
    slug: 'o-eco-aware-organic-cotton-top-ag',
    price: 15,
    category: '002',
    rating: 2.5,
    stock: '5',
    discount: '50',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: false,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_015',
    name: 'A Classic one-breasted jacket',
    slug: 'a-classic-one-breasted-jacket-ag',
    price: 30,
    category: '001',
    rating: 3,
    stock: '0',
    discount: '10',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_016',
    name: 'K Eco Aware Organic Cotton top',
    slug: 'k-eco-aware-organic-cotton-top-ah',
    price: 5,
    category: '002',
    rating: 4,
    stock: '5',
    discount: '10',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: true,
      new: false,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_017',
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top-az',
    price: 15,
    category: '006',
    rating: 4,
    stock: '5',
    discount: '90',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_018',
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top-am',
    price: 15,
    category: '006',
    rating: 4,
    stock: '5',
    discount: '2',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_019',
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top-av',
    price: 15,
    category: '003',
    rating: 4,
    stock: '5',
    discount: '5',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_020',
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top-ao',
    price: 15,
    category: '003',
    rating: 4,
    stock: '5',
    discount: '40',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Adidas',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
  {
    id: 'abc_0121',
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top-at',
    price: 15,
    category: '003',
    rating: 4,
    stock: '5',
    discount: '0',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Adidas',
    tags: {
      onSale: true,
      new: true,
      flashSale: false,
      recommended: false,
      trending: true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ullam veritatis perferendis, dolore expedita quia molestiae laborum velit minus impedit.',
    uploadDate: new Date(),
  },
];

export default products;
