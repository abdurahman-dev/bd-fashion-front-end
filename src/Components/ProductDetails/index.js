import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RelatedProducts from '../../Sections/RelatedProducts';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleProductInfo from '../SingleProductInfo';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import New4Products from '../New4Products';

const ProductDetails = () => {
  const [pd, setPd] = useState({});
  const [pdReviews, setPdReviews] = useState([]);
  const [key, setKey] = useState('home');
  const pdId = useParams();
  const pds = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    if (pds) {
      const product = pds.find((item) => item._id === pdId.id);
      if (product) {
        setPd(product);
        setPdReviews(product.reviews)
      }
    }
  }, [pdId.id, pds]);

  const catOfProduct = {
    cat: pd.productCategory,
    subCat: pd.productSubCategory,
  };

  return (
    <>
      <div className="bg-gray-200 container mx-auto py-1">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>{' '}
        /{' '}
        <Link to="/collections" className="text-gray-600 hover:text-black">
          Collection
        </Link>{' '}
        / {`${pd.productName}`}
      </div>
      <div className="py-12">
        <div className="container mx-auto">
          <SingleProductInfo pd={pd} />
          <div className="flex flex-col-reverse md:flex-row justify-between md:gap-4">
            <div>
            <New4Products/>
            </div>
            <div className="flex-1" id="PdReviews">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center"
              >
                <Tab eventKey="home" title="Delivery" className="">
                  <h4 className="text-2xl mt-2 font-medium">
                    Packaging & Delivery
                  </h4>
                  <div className="border-t-2 border-gray-200 mt-3"></div>
                  <article className="text-gray-600">
                    Less lion goodness that euphemistically robin expeditiously
                    bluebird smugly scratched far while thus cackled sheepishly
                    rigid after due one assenting regarding censorious while
                    occasional or this more crane went more as this less much
                    amid overhung anathematic because much held one exuberantly
                    sheep goodness so where rat wry well concomitantly.
                    <br />
                    Scallop or far crud plain remarkably far by thus far iguana
                    lewd precociously and and less rattlesnake contrary caustic
                    wow this near alas and next and pled the yikes articulate
                    about as less cackled dalmatian in much less well jeering
                    for the thanks blindly sentimental whimpered less across
                    objectively fanciful grimaced wildly some wow and rose
                    jeepers outgrew lugubrious luridly irrationally attractively
                    dachshund.
                  </article>
                  <p className="text-2xl  mt-2 font-medium">Suggested Use</p>
                  <div className="border-t-2 border-gray-200 mt-2"></div>
                  <article className="text-gray-600">
                    Refrigeration not necessary.
                    <br />
                    Stir before serving
                  </article>
                  <p className="text-2xl  mt-2 font-medium">Warnings</p>
                  <div className="border-t-2 border-gray-200 mt-2"></div>
                  <article className="text-gray-500">
                    Oil separation occurs naturally. May contain pieces of
                    shell.
                  </article>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <p className="text-2xl  my-2 font-medium">
                    Customer's Reviews
                  </p>

                  {pdReviews.length>0 ? (
                    pd.reviews.map((item, i) => (
                      <div className="border border-gray-200 p-3 mb-3  rounded-md hover:shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-3">
                          <div className="text-center">
                            {item.img ? (
                              <img src="" alt="customer avater" />
                            ) : (
                              <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
                                alt="customer avater"
                                className="rounded-circel h-12 w-12 mx-auto"
                              />
                            )}
                            <p className="text-blue-500 mt-2 overflow-x-hidden">
                              {item.name}
                            </p>
                          </div>
                          <div className="col-span-4">
                            <div className="flex w-full gap-4 justify-between">
                              <div>{getDate(item.createdAt)}</div>
                              <div>
                                <ReactStars
                                  count={5}
                                  value={item.rating}
                                  size={24}
                                  color2={'#ffd700'}
                                  edit={false}
                                />
                              </div>
                            </div>
                            <div>{item.comment}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>
                      <p className="text-red-500">No Reviews Right Now</p>
                    </div>
                  )}
                </Tab>
              </Tabs>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <RelatedProducts catInfo={catOfProduct} />
    </>
  );
};

export default ProductDetails;

const getDate = (date) => {
  const d = new Date(date).toDateString();
  return d;
};
