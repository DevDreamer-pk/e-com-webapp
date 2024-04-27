import React from "react";

const Content = () => {
  const handleConnectToStrava = () => {
    // Replace these values with your Strava API credentials
    const clientId = '125365';
    const redirectUri = 'http://localhost:3000/api/user/callback';
    const scope = 'activity:read';
    

    const authUrl = `https://www.strava.com/oauth/authorize?response_type=code&approval_prompt=auto&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    // Redirect the user to the authorization URL
    window.location.href = authUrl;
  };
  return (
    <>
    <div className="flex justify-center items-center h-screen w-screen">
      <button onClick={handleConnectToStrava} className="px-8 py-2 hover:bg-blue text-black font-bold rounded border border-solid text-3xl">Connect to Strava</button>
    </div>
    </>
  );
};

export default Content;
