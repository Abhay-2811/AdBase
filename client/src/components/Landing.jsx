import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardWithImage = ({ campaign }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Enable scrolling when modal is closed
    }
  };

  return (
    <div onClick={toggleDetails}>
      {" "}
      <Card
        className="relative py-4 bg-black text-white border border-purple-500 hover:shadow-lg hover:shadow-purple-500 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showDetails && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-85 flex flex-col justify-center items-center p-4">
            <div className="relative bg-black rounded-lg p-4 w-full max-w-md overflow-hidden border-1">
              <p className="uppercase font-bold text-lg mb-2 text-white">
                {campaign.name}
              </p>
              <small className="text-black">
                Spending Limit ${campaign.spendingLimit}
              </small>
              <h4 className="font-bold text-lg mt-2 text-black">
                {campaign.location}
              </h4>
            </div>
          </div>
        )}
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="uppercase font-bold text-lg mb-5">{campaign.name}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://picsum.photos/500/300"
            width="auto"
          />
        </CardBody>
      </Card>
    </div>
  );
};

function Landing() {
  const campaigns = [
    { name: "Campaign 1", spendingLimit: 30, location: "Asia" },
    { name: "Campaign 2", spendingLimit: 40, location: "Europe" },
    { name: "Campaign 3", spendingLimit: 50, location: "Africa" },
  ];

  return (
    <div className="bg-black text-white h-screen scroller">
      <div className="flex items-center justify-end px-[100px] py-[30px]">
        <button className="border-2 border-purple-500 px-[20px] py-[7px] text-xl font-semibold rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white mx-auto mt-[20px]">
          <a href="/create">+ Create Campaign</a>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto px-4 mt-[30px]">
        {campaigns.map((campaign, index) => (
          <CardWithImage key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

export default Landing;
