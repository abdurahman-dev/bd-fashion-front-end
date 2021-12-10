import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from '../../../Redux/Actions/auth.action';
import DashboardLayout from '../DashboardLayout';

const UserProfile = () => {
  const [userPersonalInfo, setUserPersonalInfo] = useState({
    name: '',
    email: '',
    userBio: '',
    userCountry: '',
    userWebSite: '',
    avatar: {},
  });
  const [userShippingInfo, setUserShippingInfo] = useState({
    userShippingCountry: '',
    userStreet: '',
    userCity: '',
    userCityState: '',
    userZipCode: '',
  });

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authLoginReducer);

  useEffect(() => {
    if (user) {
      setUserPersonalInfo({
        name: user.name,
        email: user.email,
        userBio: user.userBio,
        userCountry: user.userCountry,
        userWebSite: user.userWebSite,
        avatar: user.avatar,
      });
      setUserShippingInfo(user.userShippingInfo);
    }
  }, [user]);

  const handleStateChange = (value, name, pdInfo) => {
    if (pdInfo) {
      userPersonalInfo[name] = value;
    } else {
      userShippingInfo[name] = value;
    }
  };

  const handleSave = (which) => {
    if (which === 'addressInformation') {
      dispatch(userUpdate({ userShippingInfo: { ...userShippingInfo } }));
    } else {
      dispatch(userUpdate({ ...userPersonalInfo }));
    }
  };

  return (
    <DashboardLayout>
      {ProfileInformation(userPersonalInfo, handleStateChange, handleSave)}
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      {personalInformation(handleStateChange, handleSave, userShippingInfo)}
    </DashboardLayout>
  );
};
export default UserProfile;

function ProfileInformation(userPersonalInfo, handleStateChange, handleSave) {
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-4xl font-semibold leading-6 text-gray-900">
              Profile Information
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden border">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-6 gap-6 ">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={userPersonalInfo.name}
                    onChange={(e) => {
                      handleStateChange(
                        e.target.value,
                        e.target.name,
                        'pdInfo'
                      );
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="emailAddress"
                    id="userEmail"
                    placeholder={userPersonalInfo.email}
                    disabled
                    readOnly
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="userBio"
                      defaultValue={userPersonalInfo.userBio}
                      onChange={(e) => {
                        handleStateChange(
                          e.target.value,
                          e.target.name,
                          'pdInfo'
                        );
                      }}
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      {userPersonalInfo.avatar?.url ? (
                        <img
                          src={userPersonalInfo.avatar?.url}
                          alt=""
                          className="h-full w-full "
                        />
                      ) : (
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </span>
                    {/* <button
                    disabled
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Change
                    </button> */}
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                 
                  <select
                    id="country"
                    name="userCountry"
                    value={userPersonalInfo.userCountry}
                    onChange={(e) => {
                      handleStateChange(
                        e.target.value,
                        e.target.name,
                        'pdInfo'
                      );
                    }}
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      http://
                    </span>
                    <input
                      type="text"
                      name="userWebSite"
                      defaultValue={userPersonalInfo.userWebSite}
                      onChange={(e) => {
                        handleStateChange(
                          e.target.value,
                          e.target.name,
                          'pdInfo'
                        );
                      }}
                      id="company-website"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={() => {
                  handleSave('personalInformation');
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function personalInformation(handleStateChange, handleSave, userShippingInfo) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Address Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md border">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    name="userStreet"
                    id="street-address"
                    defaultValue={userShippingInfo?.userStreet}
                    onChange={(e) => {
                      handleStateChange(e.target.value, e.target.name);
                    }}
                    autoComplete="street-address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6  ">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="userCity"
                    id="city"
                    defaultValue={userShippingInfo?.userCity}
                    onChange={(e) => {
                      handleStateChange(e.target.value, e.target.name);
                    }}
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                 
                  <select
                    id="country"
                    name="userShippingCountry"
                   
                    defaultValue={userShippingInfo?.userShippingCountry}
                    onChange={(e) => {
                      handleStateChange(e.target.value, e.target.name);
                    }}
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="bangladesh">Bangladesh</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="userCityState"
                    id="region"
                    defaultValue={userShippingInfo?.userCityState}
                    onChange={(e) => {
                      handleStateChange(e.target.value, e.target.name);
                    }}
                    autoComplete="address-level1"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    type="text"
                    name="userZipCode"
                    id="postal-code"
                    defaultValue={userShippingInfo?.userZipCode}
                    onChange={(e) => {
                      handleStateChange(e.target.value, e.target.name);
                    }}
                    autoComplete="postal-code"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={() => {
                  handleSave('addressInformation');
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
