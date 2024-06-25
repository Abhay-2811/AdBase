import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";

const ThreeDCardDemo = ({ onDetailsClick }) => {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-purple-500 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-purple-300">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Campaign
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          The spending limit is $50 ETH
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white" onClick={onDetailsClick}>
            Details
          </CardItem>
          <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Asia
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const Popup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl text-white font-bold mb-2">Campaign</h2>
      <p className="text-sm text-white mb-4">The spending limit is $50 ETH</p>
      <p className="text-sm text-white mb-4">Location: Asia</p>
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Campaign"
        className="h-60 w-full object-cover rounded-xl mb-4"
      />
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button>
    </div>
  </div>
);

function Landing() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDetailsClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='bg-black text-white h-screen scroller'>
      <div className='flex items-center justify-end px-[100px] py-[30px]'>
        <button className='border border-2 border-purple-500 px-[20px] py-[7px] text-xl font-semibold rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white'>
          <a href='/create'>+ Add Campaign</a>
        </button>
      </div>
      <div className='flex flex-row ml-[30px] mx-auto gap-x-12'>
        <ThreeDCardDemo onDetailsClick={handleDetailsClick} />
        <ThreeDCardDemo onDetailsClick={handleDetailsClick} />
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default Landing;


// dark:hover:shadow-emerald-500/[0.1]