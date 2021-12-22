import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import TabsRender from "../components/Tabs/Tabs";
import Technologies from "../components/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        {/* <Technologies /> */}
        <TabsRender />
      </Layout>
    </>
  );
}
