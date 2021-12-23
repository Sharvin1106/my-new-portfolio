import React from "react";
import { TabGroup } from "@statikly/funk";
import TechCard from "../Technologies/TechCards";
import { Languages } from "../../dummyData/TechStack/Languages";
import { Web as Webs } from "../../dummyData/TechStack/Web";
import { Mobile as Mobiles } from "../../dummyData/TechStack/Mobile";
import { Cloud as Clouds } from "../../dummyData/TechStack/Cloud";
import { ML as MLS } from "../../dummyData/TechStack/ML";

const NewTabs = () => {
  return (
    <section className="p-0 my-20 mx-auto max-w-screen-lg box-content">
      <h2 className="section-title w-max max-w-full mb-16px pt-58px px-0 pb-16px md:mb-12px md:pt-40px md:px-0 md:pb-12px sm:mb-8px sm:pt-16px sm:px-0 sm:pb-8px sm:max-w-full">
        Technologies
      </h2>
      <div className="container mx-auto px-0 md:px-4 py-4">
        <TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>
          <TabGroup.TabList>
            <TabGroup.Tab
              index={0}
              className="h-12 px-12 transition-colors duration-150 rounded-full"
              activeClassName="bg-black text-white"
              inactiveClassName="text-white"
            >
              Languages
            </TabGroup.Tab>
            <TabGroup.Tab
              index={1}
              className="h-12 px-12 transition-colors duration-150 rounded-full"
              activeClassName="bg-black text-white"
              inactiveClassName="text-white"
            >
              Web Dev
            </TabGroup.Tab>
            <TabGroup.Tab
              index={2}
              className="h-12 px-12 transition-colors duration-150 rounded-full"
              activeClassName="bg-black text-white"
              inactiveClassName="text-white"
            >
              Mobile Dev
            </TabGroup.Tab>
            <TabGroup.Tab
              index={3}
              className="h-12 px-12 transition-colors duration-150 rounded-full"
              activeClassName="bg-black text-white"
              inactiveClassName="text-white"
            >
              Cloud
            </TabGroup.Tab>
            <TabGroup.Tab
              index={4}
              className="h-12 px-12 transition-colors duration-150 rounded-full"
              activeClassName="bg-black text-white"
              inactiveClassName="text-white"
            >
              ML/DL
            </TabGroup.Tab>
          </TabGroup.TabList>
          <TabGroup.TabPanel
            index={0}
            className="p-16 transition-all transform h-64"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <div className="flex flex-col md:flex-row sm:flex-col overflow-scroll">
              {Languages.map((language) => {
                return <TechCard key={language.id} {...language} />;
              })}
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={1}
            className="p-16 transition-all transform h-64 flex flex-row"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <div className="flex md:flex-row sm:flex-col overflow-scroll">
              {Webs.map((web) => {
                return <TechCard key={web.id} {...web} />;
              })}
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={2}
            className="p-16 transition-all transform h-64"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <div className="flex md:flex-row sm:flex-col overflow-scroll">
              {Mobiles.map((mobile) => {
                return <TechCard key={mobile.id} {...mobile} />;
              })}
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={3}
            className="p-16 transition-all transform h-64 overflow-scroll"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <div className="flex md:flex-row sm:flex-col overflow-scroll">
              {Clouds.map((cloud) => {
                return <TechCard key={cloud.id} {...cloud} />;
              })}
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={4}
            className="p-16 transition-all transform h-64 overflow-scroll"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <div className="flex md:flex-row sm:flex-col">
              {MLS.map((ml) => {
                return <TechCard key={ml.id} {...ml} />;
              })}
            </div>
          </TabGroup.TabPanel>
        </TabGroup>
      </div>
    </section>
  );
};

export default NewTabs;
