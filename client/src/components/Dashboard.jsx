import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const ThreeDCardDemo = ({ onDetailsClick, campaign }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-xl dark:hover:shadow-purple-500 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-purple-300">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {campaign.name}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          The spending limit is {campaign.spendingLimit}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <img
            src={campaign.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white" onClick={() => onDetailsClick(campaign, 'claim')}>
            Claim
          </CardItem>
          <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            {campaign.location}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const Popup = ({ campaign, onClose, showDetails }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="bg-gray-800 p-6 rounded-lg">
      {showDetails ? (
        <>
          <h2 className="text-xl text-white font-bold mb-2">{campaign.name}</h2>
          <p className="text-sm text-white mb-4">The spending limit is {campaign.spendingLimit}</p>
          <p className="text-sm text-white mb-4">Location: {campaign.location}</p>
          <img
            src={campaign.image}
            alt="Campaign"
            className="h-60 w-full object-cover rounded-xl mb-4"
          />
        </>
      ) : null}
      <div className='mt-8 flex flex-col items-center'>
      <p className='text-lg text-white mb-4'>No of clicks = 22</p>
      <div className='flex flex-row gap-x-4'>
             <p className='text-xl text-white mb-4'>$100 ETH</p>
        <button className='text-lg text-white font-semibold mb-4 border border px-[6px] py-[2px] rounded-lg bg-black'>Claimed </button>
        </div>
        <div className='flex flex-row gap-x-4'>
        <p className='text-xl text-white mb-4'>$150 ETH</p>
        <button className='text-lg text-white font-semibold mb-4 border border px-[6px] py-[2px] rounded-lg bg-black'>Claimable </button>
   </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button>
    </div>
  </div>
  
);

const TypewriterEffectSmoothDemo = () => {
  const words = [
    { text: "Claim" },
    { text: "Ad's" },
    { text: "Revenue.", className: "text-purple-500 dark:text-purple-500" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem] mt-[40px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = (campaign, type) => {
    setSelectedCampaign(campaign);
    setShowDetails(type === 'details');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const campaigns = [
    {
      name: "Campaign 1",
      spendingLimit: "$50 ETH",
      location: "Asia",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Campaign 2",
      spendingLimit: "$30 ETH",
      location: "Europe",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className='bg-black flex flex-col items-center h-screen'>
      <div className='text-4xl'>
        <TypewriterEffectSmoothDemo />
      </div>
      <div className='flex flex-row ml-[30px] mx-auto gap-x-12'>
        {campaigns.map(campaign => (
          <ThreeDCardDemo key={campaign.name} onDetailsClick={handleDetailsClick} campaign={campaign} />
        ))}
      </div>
      {showPopup && <Popup campaign={selectedCampaign} onClose={handleClosePopup} showDetails={showDetails} />}
      <div className='mt-8 flex flex-col items-center'>
     
       
      </div>
    </div>
  );
}

export default Dashboard;
