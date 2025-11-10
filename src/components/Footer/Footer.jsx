import React from "react";

const Footer = () => {
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="2xl:h-[110vh] relative md:pt-[20vh] ">
          <div className="overflow-hidden z-10">
            <h1 className="general-title text-center text-milk py-5">
              #CHUGRESPONSIBLY
            </h1>
          </div>
        </div>
        <video src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
        />

        <div className="flex-center gap-5 relative md:mt-20 z-10 mt-5">
        <div className="social-btn">
            <img src="/images/yt.svg" alt="" />
        </div>
        <div className="social-btn">
            <img src="/images/tiktok.svg" alt="" />
        </div>
        <div className="social-btn">
            <img src="/images/insta.svg" alt="" />
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default Footer;
