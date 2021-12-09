import toast from "react-hot-toast";

 //add product form validation function
 export const requiredErrorHandle = (mesg) => {
  return toast.error(mesg, {
    duration: 4000,
    position: 'top-right',
  });
};

export const requiredSuccessHandle = (mesg) => {
  return toast.success(mesg, {
    duration: 4000,
    position: 'top-right',
  });
};