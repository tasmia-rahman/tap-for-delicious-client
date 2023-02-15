import React from "react";
import banner from "../../Assets/about-banner/about.jpg";

const Privacy = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-right"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-5xl text-white   block text-center py-40 ">
          Privacy Policy | Tap For Delicious
        </h1>
      </div>
      <div className="p-14 ">
        <h1 className="text-4xl">What information we collect about you?</h1>
        <p className="mt-10">
          We collect personal information from you when you order goods or
          services from us or use our website. We also collect information when
          you complete any customer survey. Website usage information may also
          be collected using cookies.
        </p>
      </div>
      <div className="p-14 ">
        <h1 className="text-4xl">Cookies and Google Analytics</h1>
        <p className="mt-10">
          Cookies are small text files that are placed on your computer by
          websites that you visit. They are widely used in order to make
          websites work, or work more efficiently, as well as to provide
          information to the owners of the site.
          <br />
          <br />
          This website uses Google Analytics, a web analytics service provided
          by Google, Inc. Google Analytics uses "cookies", which are text files
          saved on your computer, to help the website analyze how you use the
          site. The information generated by the cookie about your use of the
          website will be transmitted to and stored by Google on servers in the
          United States. If this website anonymizes IP addresses, your IP
          address will be truncated by Google within a EU member state or other
          EEA state before being transmitted to the US. Only in exceptional
          situations will your full IP address be transmitted to Google servers
          in the United States and truncated there. Google will use this
          information for the purpose of evaluating your use of the website,
          compiling reports on website activity for website operators and
          providing other services relating to website activity and internet
          usage. Google will not associate your IP address with any other data
          held by Google. You may refuse the use of cookies by selecting the
          appropriate settings on your browser, however please note that if you
          do this you may not be able to use the full functionality of this
          website. By using this website, you consent to the processing of data
          about you by Google in the manner and for the purposes set out above.{" "}
        </p>
      </div>
      <div className="p-14 ">
        <h1 className="text-4xl">
          How will we use the information we collect from you?
        </h1>
        <p className="mt-10">
          Information that we collect from you is used to process your order and
          to manage your account. We may also use your information to email you
          about other products or services that we think may be of interest to
          you.
          <br />
          <br />
          In processing your order we may send your information to credit
          reference and fraud prevention agencies.
          <br />
          <br />
          From time to time we may send your information to third parties which
          we consider may have goods or services which are of interest to you.
          If you do not wish to be contacted by third parties please email us.{" "}
        </p>
      </div>
      <div className="p-14 ">
        <h1 className="text-4xl">Access to your information</h1>
        <p className="mt-10">
          You have a right to request a copy of the information we hold on you
          at any time. Please email us if you would like to receive a copy of
          this information.
        </p>
      </div>
      <div className="p-14 ">
        <h1 className="text-4xl">Other Websites</h1>
        <p className="mt-10">
          Our website may have links to other websites. This privacy policy only
          applies to this website. You should therefore read the privacy
          policies of the other websites when you are using those sites.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
