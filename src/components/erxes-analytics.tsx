import Script from "next/script";

const ErxesAnalytics = () => (
  <>
    <Script
      async
      src={"https://guatemedica.app.erxes.io/widgets/build/messengerWidget.bundle.js"} 
      id="lrHF17"
    ></Script>
    <Script
      id="erxes-analytics"
      dangerouslySetInnerHTML={{
        __html: `
        window.erxesSettings = {
            messenger: {
              brand_id: "lrHF17",
            },
          }
            var script = document.createElement('script');
          script.src = "https://guatemedica.app.erxes.io/widgets/build/messengerWidget.bundle.js";
          script.async = true;
          var entry = document.getElementsByTagName('script')[0];
          entry.parentNode.insertBefore(script, entry);
        `,
      }}
    ></Script>
  </>
);
export default ErxesAnalytics;

