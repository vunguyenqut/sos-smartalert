import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useEffect, useState } from "react";
  

export default function Home() {
  
const [resultApi, setResultApi] = useState();
useEffect(() => {
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function () {
    OneSignal.init({
      appId: "75ff99fa-9290-49fc-9e58-272d1814433b",
      notifyButton: {
        enable: true,
      },

      allowLocalhostAsSecureOrigin: true,
    });
  });
//  return () => {
//    window.OneSignal = undefined;
//  };
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""> </script>
    
    
      </Head>

      <main>
        <Header title="Welcome to Smart Alert by S.O.S team" />
        <p className="description">
          Demo project by S.O.S team via Krystal's Hackamoon 
        </p>
      </main>

      <Footer />
    </div>
  ) => {
    window.OneSignal = undefined;
      };
}
