import ProductCard from '../../Ul/ProductCard';

export const productShowCase = (pd) => {
  return (
    <div className="p-4 bg-white">
      <div
        className={`grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4`}
      >
        {pd.length > 0 &&
          pd.map((item, i) => <ProductCard product={item} key={i} />)}
      </div>
      {pd.length <= 0 && (
        <div className="text-center bg-yellow-50 flex justify-center h-80">
          <div>
            <h2 className="text-3xl font-medium">No Products</h2>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_dr7bgtqy.json"
              speed="1"
              className=""
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      )}
    </div>
  );
};
//filter category function
export const handleFilterByCategory = (pds, cat) => {
  return pds.filter((item) => item.productCategory === cat.name);
};
//sort filter function
export const handleShortChange = (e, products) => {
  const pdShortByName = [];
  const pdShortByPrice = [];
  const pdShortByRating = [];
  const pdShorted = [];

  products.forEach((item, i) => {
    pdShortByName[i] = item.productName;
    pdShortByPrice[i] = item;
    pdShortByRating[i] = item;
  });
  pdShortByName.sort();
  pdShortByName.forEach(
    (item, i) => (pdShorted[i] = products.find((pd) => pd.productName === item))
  );
  // Price sort Lower Price to Higher
  const lPrice = pdShortByPrice.sort((a, b) =>
    a.productPrice > b.productPrice ? 1 : -1
  );

  const rating = pdShortByRating.sort((a, b) =>
    a.ratings > b.ratings ? 1 : -1
  );

  if (e === 'ascending') {
    return pdShorted;
  } else if (e === 'descending') {
    return pdShorted.reverse();
  } else if (e === 'lowerPrice') {
    return lPrice;
  } else if (e === 'upperPrice') {
    return lPrice.reverse();
  } else if (e === 'upperRating') {
    return rating.reverse();
  } else {
    return products;
  }
};
//product price range filter
export const priceRangeFilter = (value, pds) => {
  const product = [];
  pds.forEach((item, i) => (product[i] = item));
  return product.filter(
    (item) => item.productPrice >= value.min && item.productPrice <= value.max
  );
};
//handle search product
export const searchProductHandle = (value, pds) => {
  const product = [];
  let pd = [];
  pds.forEach((item, i) => (product[i] = item));
  product.forEach((item, i) => {
    if (item.productName.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
      pd = [...pd, item];
    }
  });
  return pd;
};
