export default function Header({ title }) {
<h1 className="title">{title}</h1>  
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "75ff99fa-9290-49fc-9e58-272d1814433b",
    });
  });
</script>
  
}
