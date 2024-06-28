import React, { useEffect, useState } from "react";
const backendUrl = "http://16.171.132.217:3000";

const checkContentType = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return contentType;
  } catch (error) {
    console.error("Error fetching the content type:", error);
  }
};

const DisplayAd = ({ width, height }) => {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const getAd = async () => {
      const res = await fetch(`${backendUrl}/randomAd`, {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      });
      const ad_data = await res.json();
      const contenttype = await checkContentType(ad_data.ad);
      setAd({
        ...ad_data,
        contenttype,
      });
    };

    if (!ad) {
      getAd();
    }
  }, [ad]);
  return (
    <div>
      {" "}
      {ad ? (
        <a href={ad.redirectUrl} target="_blank">
          {ad.contenttype.startsWith("image/") ? (
            <img src={ad.ad} alt="Ad" width={width} height={height}/>
          ) : (
            <>
              {ad.contenttype.startsWith("video/") ? (
                <video width={width} height={height} autoPlay muted loop>
                  <source
                    src={ad.ad}
                    type="video/mp4"
                  />
                  Type Not supported
                </video>
              ) : (
                <>Unspported Type</>
              )}
            </>
          )}
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayAd;
