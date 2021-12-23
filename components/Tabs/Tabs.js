import React from "react";
import TechCard from "../Technologies/TechCards";
import { Languages } from "../../dummyData/TechStack/Languages";
import { Web as Webs } from "../../dummyData/TechStack/Web";
import { Mobile as Mobiles } from "../../dummyData/TechStack/Mobile";
import { Cloud as Clouds } from "../../dummyData/TechStack/Cloud";
import { ML as MLS } from "../../dummyData/TechStack/ML";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <section className="p-0 my-20 mx-auto max-w-screen-lg box-content">
      <h2 className="section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Technologies
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-10px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white"
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white"
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white"
                  
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white"
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white"
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
                  <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
                    {Languages.map((language) => {
                      return <TechCard key={language.id} {...language} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
                    {Webs.map((web) => {
                      return <TechCard key={web.id} {...web} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
                    {Mobiles.map((mobile) => {
                      return <TechCard key={mobile.id} {...mobile} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
                    {Clouds.map((cloud) => {
                      return <TechCard key={cloud.id} {...cloud} />;
                    })}
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                  <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
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

export default function TabsRender() {
  return (
    <>
      <Tabs color="red" />
    </>
  );
}
