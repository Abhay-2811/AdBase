import React, { useEffect, useState } from "react";
const backendUrl = "http://16.171.132.217:3000";

const DisplayAd = ({ width }) => {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    let headersList = {
      Accept: "*/*",
    };

    fetch("http://16.171.132.217:3000/randomAd", {
      method: "GET",
      headers: headersList,
    }).then((res) => {
      console.log(res);
      setAd(res);
    });
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
