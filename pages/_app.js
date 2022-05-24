import '@styles/globals.css'

function Application({ Component, pageProps }) {

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
  
  
  return <Component {...pageProps} />
}

export default Application
