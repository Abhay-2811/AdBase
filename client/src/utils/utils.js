const backendUrl = "https://adbase.onrender.com";
async function getCampaigns(address){
    const res = await fetch(`${backenUrl}\campaigns`,{
        method: "GET"
    })
}