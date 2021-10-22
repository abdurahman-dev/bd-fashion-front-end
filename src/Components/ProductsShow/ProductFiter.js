export const handleFeatureChange = (e,products,filterType) => {
    const catProducts =products
      ? products.filter((item) => item.brand === '')
      : products.filter((item) => item.category ==='');
    if (e === 'default') {
      return products
    } else if (
      e === 'onSale' ||
      e === 'trending' ||
      e === 'flashSale' ||
      e === 'new'
    ) {
      const product = catProducts.filter((item) => item.tags[e] === true);
    
      if (product.length <= '2') {
      
        return;
      }
      if (product.length === 3) {
       
        return;
      } else {
        
      }
    } else {
      const pSlug = [];
      catProducts.forEach((item, i) => (pSlug[i] = item.slug));
      pSlug.sort();
      const stPd = [];
      pSlug.forEach(
        (item, i) => (stPd[i] = catProducts.find((pd, i) => pd.slug === item))
      );
      // ascending
      if (e === 'ascending') {
       
        if (stPd.length <= '2') {
          
          return;
        }
        if (stPd.length === 3) {
         
          return;
        } else {
         
        }
      }
      if (e === 'descending') {
       
        if (stPd.reverse().length <= '2') { 
          return;
        }
        if (stPd.reverse().length === 3) {
         
          return;
        } else {
         
        }
      }

      // Lower Price to Higher
      const lowerPd = catProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      if (e === 'lowerPrice') {
       
        if (lowerPd.length <= '2') {
        
          return;
        }
        if (lowerPd.length === 3) {
          
          return;
        } else {
        
        }
      }
      if (e === 'upperPrice') {
       
        if (lowerPd.reverse().length <= '2') {
         
          return;
        }
        if (lowerPd.reverse().length === 3) {
         
          return;
        } else {
        
        }
      }
    }
  };