import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';
import img from '../../images/people-carrying-shopping-bags-collection_52683-15820.jpg';
import {
  clearErrors,
  getLogged,
  userRegister,
} from '../../Redux/Actions/auth.action';
import Navbar from '../Shared/Navbar';
import Loader from '../../images/2a6dae53616869.593a85ce553c4.gif'


const LogIn = () => {
  let history = useHistory();
  let location = useLocation();
  const [reg, setReg] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let { from } = location.state || { from: { pathname: '/' } };
  const dispatch = useDispatch();
  const authLogin = useSelector((state) => state.authLoginReducer);
  const authReg = useSelector((state) => state.authRegisterReducer);
  const isAuthenticated = authLogin.isAuthenticated | authReg.isAuthenticated;
  const loading = authLogin.loading | authReg.loading;
  const error = authLogin.error | authReg.error;

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error]);

  const handleReg = () => {
    const info = {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password,
    };
    dispatch(userRegister(info));
    if (isAuthenticated) {
      history.replace(from);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  const handleLog = () => {
    const info = {
      email,
      password,
    };
    dispatch(getLogged(info));
    if (isAuthenticated) {
      history.replace(from);
    }
    setEmail('');
    setPassword('');
  };
  if (isAuthenticated) {
    return <Redirect to={'/'} />;
  }
  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center w-screen h-screen">
        <img src={Loader} width={400} height={400} alt="Loader" />
        </div>
      ) : (
        <div className="py-28 bg-blue-200 h-screen">
          <div className="container mx-auto pt-4">
            <div className=" h-full justify-center items-center flex">
              <div className="flex justify-between py-4  rounded-md w-full md:w-4/5 shadow-xl">
                <div className=" h-full w-full hidden md:block">
                  <img
                    src={img}
                    alt=""
                    className="object-cover h-full w-full rounded"
                  />
                </div>
                <div className="mx-auto  pl-4 pr-4 md:pr-2 lg:pr-0 flex items-center w-full">
                  <div
                    className=""
                    style={{ minHeight: '90%', minWidth: '85%' }}
                  >
                    <div>
                      <h4 className="text-3xl text-blue-600  uppercase font-medium">
                        Welcome to BD Fashion{' '}
                      </h4>
                      <p className="text-2xl mt-3 font-normal">
                        Ship Smart Today
                      </p>
                    </div>
                    <div className="mt-4">
                      {reg && (
                        <div className="grid gap-2 grid-cols-2">
                          <input
                            type="text"
                            className="col-span-2 md:col-span-1 outline-none border-blue-600 h-10 rounded-lg border px-4  focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                          <input
                            type="text"
                            className="col-span-2 md:col-span-1 outline-none border-blue-600 h-10 rounded-lg border px-4  focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                      )}
                      <input
                        type="text"
                        className="block outline-none border-blue-600 w-full h-10 rounded-lg border px-4 my-4 focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        className="block outline-none border-blue-600 w-full  h-10 rounded-lg border px-4 my-4 focus:ring-1 focus:shadow-lg focus:ring-blue-600"
                        placeholder="PassWord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={() => setReg(!reg)}
                        className="pb-4 text-blue-600"
                      >
                        {reg ? <span>Already have an account? Login</span> : <span>Create Account?</span> }
                      </button>
                      <button
                        className="block w-full text-white bg-blue-600 px-12 py-2 rounded-md"
                        onClick={reg ? handleReg : handleLog}
                      >
                        {reg ? 'Registration' : 'Login'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
