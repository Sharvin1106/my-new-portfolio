import React from "react";
import Technologies from "../Technologies/Technologies";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <section
      className="flex flex-row p-0 my-20 mx-auto max-w-screen-lg box-content relative overflow-hidden tech-section-grid md:px-48px md:pt-24px md:pb-0 md:flex-col sm:p-0 sm:tech-section-grid-vw sm:flex-col"
      id="tech"
    >
       <h2 className="section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Technologies
          </h2>
      <div className="flex flex-wrap">
        <div className="w-auto">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="text-center rounded-full">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
              </a>
            </li>
            <li className="text-center rounded-full">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                }
                // className={
                //   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                //   (openTab === 2
                //     ? "text-white bg-" + color + "-600"
                //     : "text-" + color + "-600 bg-white")
                // }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Settings
              </a>
            </li>
            <li className="text-center rounded-full">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Technologies />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Technologies />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Technologies />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />
    </>
  );
}
