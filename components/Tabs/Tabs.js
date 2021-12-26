import React from "react";
import TechCard from "../Technologies/TechCards";

const Tabs = ({ Languages, Webs, Mobiles, Clouds, MLS }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section
      id="tech"
      className="md:p-0 p-4 my-20 mx-auto max-w-screen-lg box-content"
    >
      <h2 className="section-title tech-section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Technologies
      </h2>
      <div className="flex flex-wrap mt-4">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={
                openTab === 1
                  ? "tech-section-title "
                  : "text-white " +
                    "-mb-px mr-10px last:mr-0 text-center rounded-full gradient-header-logo"
              }
            >
              <a
                className={
                  "text-xs font-link px-5 py-3 shadow-lg block leading-normal text-white"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Languages
              </a>
            </li>
            <li
              className={
                openTab === 2
                  ? "tech-section-title "
                  : "text-white " +
                    "-mb-px mr-10px last:mr-0 text-center rounded-full gradient-header-logo"
              }
            >
              <a
                className={
                  "text-xs font-link px-5 py-3 shadow-lg rounded block leading-normal text-white"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Web Dev
              </a>
            </li>
            <li
              className={
                openTab === 3
                  ? "tech-section-title "
                  : "text-white " +
                    "-mb-px mr-10px last:mr-0 text-center rounded-full gradient-header-logo"
              }
            >
              <a
                className={
                  "text-xs font-link px-5 py-3 shadow-lg rounded block leading-normal text-white"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Mobile Dev
              </a>
            </li>
            <li
              className={
                openTab === 4
                  ? "tech-section-title "
                  : "text-white " +
                    "-mb-px mr-10px last:mr-0 text-center rounded-full gradient-header-logo"
              }
            >
              <a
                className={
                  "text-xs font-link px-5 py-3 shadow-lg rounded block leading-normal text-white"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Cloud
              </a>
            </li>
            <li
              className={
                openTab === 5
                  ? "tech-section-title "
                  : "text-white " +
                    "-mb-px mr-10px last:mr-0 text-center rounded-full gradient-header-logo"
              }
            >
              <a
                className={
                  "text-xs font-link px-5 py-3 shadow-lg rounded block leading-normal text-white"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                DL/ML
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {Languages.map((language) => {
                      return <TechCard key={language.id} {...language} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {Webs.map((web) => {
                      return <TechCard key={web.id} {...web} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {Mobiles.map((mobile) => {
                      return <TechCard key={mobile.id} {...mobile} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {Clouds.map((cloud) => {
                      return <TechCard key={cloud.id} {...cloud} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                    {MLS.map((ml) => {
                      return <TechCard key={ml.id} {...ml} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TabsRender({ Languages, Webs, Mobiles, Clouds, MLS }) {
  return (
    <>
      <Tabs
        Languages={Languages}
        Webs={Webs}
        Mobiles={Mobiles}
        Clouds={Clouds}
        MLS={MLS}
      />
    </>
  );
}
