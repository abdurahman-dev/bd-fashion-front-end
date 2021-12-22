import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const OrderViewModal = (props) => {
    const item = props.order;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="mb-2">
            <span className="text-2xl font-medium">
              Order Status{' '}
              <div className={`inline-block ${item.orderStatus==='Delivered' ? 'bg-green-500 border-red-500' : 'bg-red-500 border-green-500'} rounded-md text-white  px-3 py-1 capitalize`}>
                {' '}
                {item.orderStatus}
              </div>{' '}
            </span>
          </div>
          <div className="mb-2">
            <h4 className="text-2xl font-semibold">
              {item.orderItems?.length}{' '}
              {item.orderItems?.length > 1 ? 'Items' : 'Item'}
            </h4>
            <h4 className="text-2xl font-semibold">
              Total Price : {'$'}
              {item.totalPrice}
            </h4>
            <h4 className="text-md font-semibold">
              Payment At: {new Date(item.paidAt).toLocaleString().split(',')[0]}
            </h4>
          </div>
          <div className="border rounded-md mb-2">
            {item.orderItems?.length > 0 &&
              item?.orderItems?.map((order) => (
                <div
                  className="flex justify-between items-center border-b px-3 py-1"
                  key={Math.random()}
                >
                  <div>
                    <img
                      src={order.productImage}
                      className="w-12 h-12"
                      alt="product img"
                    />
                  </div>
                  <div>{order.productName}</div>
                  <div>
                    <span>Quantity : </span>
                    <span>{order.qnt}</span>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <h2 className="text-xl">Shipping Address</h2>
  
            <span className="mr-3">Name: {item?.shippingInfo?.name}</span>
            <span>Phone: {item?.shippingInfo?.PhoneNumber}</span>
            <br />
            <span className="mr-3">Street: {item?.shippingInfo?.Street}</span>
            <span>City: {item?.shippingInfo?.city}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={props.onHide}
            className="bg-blue-400 px-3 py-1 rounded-md text-white "
          >
            Close
          </button>
         
        </Modal.Footer>
      </Modal>
    );
  };

export default OrderViewModal;