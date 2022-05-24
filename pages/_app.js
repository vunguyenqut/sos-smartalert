import '@styles/globals.css'





    
function Application({ Component, pageProps }) {
useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
            appId: "b40b7cc7-13dc-4662-8b48-efa668f9b72a",
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

export default Application
