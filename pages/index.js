import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
