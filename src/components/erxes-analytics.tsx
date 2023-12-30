import Script from "next/script";

const ErxesAnalytics = () => (
  <>
    <Script
      async
      src={"https://guatemedica.app.erxes.io/widgets/build/messengerWidget.bundle.js"} 
      id="GEQE6C"
    ></Script>
    <Script
      id="erxes-analytics"
      dangerouslySetInnerHTML={{
        __html: `
         window.erxesSettings = {
    messenger: {
      brand_id: "GEQE6C",
    },
  };
        var script = document.createElement('script');
  script.src = "https://test-pkos4.app.erxes.io/widgets/build/messengerWidget.bundle.js";
  script.async = true;
  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);
        `,
      }}
    ></Script>
  </>
);
export default ErxesAnalytics;

