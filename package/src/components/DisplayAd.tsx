import React, { useEffect, useState } from "react";
const backendUrl = "http://16.171.132.217:3000";

const DisplayAd = ({ width }) => {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    let headersList = {
      Accept: "*/*",
    };

    if (!ad) {
      fetch(`${backendUrl}/randomAd`, {
        method: "GET",
        headers: headersList,
      }).then((res) => {
        res.json().then((random_ad) => {setAd(random_ad)});
      });
    }
  }, [ad]);
  return (
    <div>
      {" "}
      {ad ? (
        <iframe
          src={ad.ad}
          frameBorder="0"
          width="200"
          height="200"
          name="imgbox"
          id="imgbox"
        ></iframe>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayAd;
