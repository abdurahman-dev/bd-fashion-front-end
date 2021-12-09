import React from 'react';

const ConformDelete = ({onCancel,conformDlt}) => {
    return (
        <div className="py-4 px-2 text-center">
      <div>
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_i0zh5psb.json"
          background="transparent"
          speed="1"
          style={{ width: "250px", height: "250px", margin:" 0 auto" }}
          autoplay
          loop
        ></lottie-player>
      </div>
      <div>
        <h5 className="text-2xl md:text-4xl font-semibold mb-3 text-gray-600">
          Are you Sure ?
        </h5>
        <p className="mb-4 text-gray-600 text-xl">
          You will not be able to recover this imaginary file!
        </p>
      </div>
      <div>
        <button onClick={onCancel} className="py-2 px-4 text-2xl mr-3 border rounded-lg  bg-gray-50 ">
          cancel
        </button>
        <button onClick={conformDlt} className="py-2 px-4 text-2xl rounded-lg bg-red-600 text-white ">
          Delete
        </button>
      </div>
    </div>
    );
};

export default ConformDelete;