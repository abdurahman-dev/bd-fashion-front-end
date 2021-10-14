const products = [
  {
    name: 'C Eco Aware Organic Cotton top',
    slug: 'c-eco-aware-organic-cotton-top',
    price: 20,
    category: '002', //id of category
    rating: 5,
    stock: '5',
    discount: '',
    subCategory: 'Cloth', //id of a category but it will be subcategory
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:true,
      new:true,
      flashSale:false,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'Z Classic one-breasted jacket',
    slug: 'z-classic-one-breasted-jacket',
    price: 10,
    category: '001',
    rating: 2,
    stock: '0',
    discount: '10%',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags:{
      onSale:false,
      new:true,
      flashSale:false,
      recommended:false,
      trending:false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'Z Eco Aware Organic Cotton top Model-GH',
    slug: 'z-e-eco-aware-organic-cotton-top',
    price: 25,
    category: '002',
    rating: 5,
    stock: '5',
    discount: '',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:false,
      new:false,
      flashSale:true,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'B Classic one-breasted jacket',
    slug: 'b-classic-one-breasted-jacket',
    price: 50,
    category: '001',
    rating: 4,
    stock: '0',
    discount: '10%',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags:{
      onSale:true,
      new:false,
      flashSale:false,
      recommended:false,
      trending:false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'O Eco Aware Organic Cotton top Small-GH',
    slug: 'o-eco-aware-organic-cotton-top',
    price: 15,
    category: '002',
    rating: 2.5,
    stock: '5',
    discount: '',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:false,
      new:true,
      flashSale:false,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'A Classic one-breasted jacket',
    slug: 'a-classic-one-breasted-jacket',
    price: 30,
    category: '001',
    rating: 3,
    stock: '0',
    discount: '10%',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Boom',
    tags:{
      onSale:true,
      new:true,
      flashSale:false,
      recommended:false,
      trending:false,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_fb07f6fc-f4bb-46a9-966d-1a0b66e6960a_360x.jpg?v=1614067794',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_41c2342f-698a-4259-8844-cf3d62df8866_360x.jpg?v=1614067794',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'K Eco Aware Organic Cotton top',
    slug: 'k-eco-aware-organic-cotton-top',
    price: 5,
    category: '002',
    rating: 4,
    stock: '5',
    discount: '',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:true,
      new:false,
      flashSale:false,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top',
    price: 15,
    category: '006',
    rating: 4,
    stock: '5',
    discount: '',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:true,
      new:true,
      flashSale:false,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
  {
    name: 'Nike Shoes For Mens',
    slug: 'eco-aware-organic-cotton-top',
    price: 15,
    category: '006',
    rating: 4,
    stock: '5',
    discount: '',
    subCategory: 'Cloth',
    reviews: [],
    brand: 'Nike',
    tags:{
      onSale:true,
      new:true,
      flashSale:false,
      recommended:false,
      trending:true,
    },
    image: [
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/1_35559729-bb4f-477a-afbb-d695451b9719_360x.jpg?v=1615530706',
      },
      {
        Img: 'https://cdn.shopify.com/s/files/1/0256/4594/0810/products/2_fa31bdcb-129f-4c46-9c5c-566971712942_360x.jpg?v=1615530706',
      },
    ],
    uploadDate: new Date(),
  },
];

export default products;
