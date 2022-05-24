import '@styles/globals.css'
import React, { useState, useEffect } from 'react';


    
function Application() {
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

    return () => {
        window.OneSignal = undefined;
    };
}, []); // <-- run this effect once on mount
}


//function Application({ Component, pageProps }) {
//  return <Component {...pageProps} />
//}

//75ff99fa-9290-49fc-9e58-272d1814433b

export default Application
