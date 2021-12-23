import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import TabsRender from "../components/Tabs/Tabs";
import Technologies from "../components/Technologies/Technologies";
import NewTabs from "../components/Tabs/NewTabs";
import ProjectDeck from "../components/Projects/ProjectDeck";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        {/* <Technologies /> */}
        {/* <TabsRender /> */}
        <NewTabs />
        <ProjectDeck />
      </Layout>
    </>
  );
}
