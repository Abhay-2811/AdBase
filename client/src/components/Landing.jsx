import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardWithImage = ({ campaign }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative py-4 bg-black text-white border border-purple-500 hover:shadow-lg hover:shadow-purple-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 rounded-lg">
          <p className="uppercase font-bold text-lg">{campaign.name}</p>
          <small className="text-white">Spending Limit ${campaign.spendingLimit}</small>
          <h4 className="font-bold text-large">{campaign.location}</h4>
        </div>
      )}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="uppercase font-bold text-lg">{campaign.name}</p>
        <small className="text-white">Spending Limit ${campaign.spendingLimit}</small>
        <h4 className="font-bold text-large">{campaign.location}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

function Landing() {
  const campaigns = [
    { name: 'Campaign 1', spendingLimit: 30, location: 'Asia' },
    { name: 'Campaign 2', spendingLimit: 40, location: 'Europe' },
    { name: 'Campaign 3', spendingLimit: 50, location: 'Africa' },
    { name: 'Campaign 4', spendingLimit: 60, location: 'America' }
  ];

  return (
    <div className='bg-black text-white h-screen scroller'>
      <div className='flex items-center justify-end px-[100px] py-[30px]'>
        <button className='border border-2 border-purple-500 px-[20px] py-[7px] text-xl font-semibold rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white'>
          <a href='/create'>+ Add Campaign</a>
        </button>
      </div>
      <div className='flex flex-row ml-[40px] mx-auto gap-x-12'>
        {campaigns.map((campaign, index) => (
          <CardWithImage key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
