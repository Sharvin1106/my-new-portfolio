import Layout from "../components/Layout/Layout";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import TabsRender from "../components/Tabs/Tabs";
import ProjectDeck from "../components/Projects/ProjectDeck";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home({
  Languages,
  Webs,
  Mobiles,
  Clouds,
  MLS,
  Projects,
  Biodata,
}) {
  const { introduction, github, profilePic, linkedin, facebook, instagram } =
    Biodata[0].attributes;
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <About introduction={introduction} profilePic={profilePic} />
        <TabsRender
          Languages={Languages}
          Webs={Webs}
          Mobiles={Mobiles}
          Clouds={Clouds}
          MLS={MLS}
        />
        <ProjectDeck Projects={Projects} github={github} />
        <Footer
          instagram={instagram}
          facebook={facebook}
          linkedin={linkedin}
          github={github}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const langRes = await fetch(process.env.API_URL + "/languages");
  const { data: Languages } = await langRes.json();
  const webRes = await fetch(process.env.API_URL + "/webs");
  const { data: Webs } = await webRes.json();
  const mobileRes = await fetch(process.env.API_URL + "/mobiles");
  const { data: Mobiles } = await mobileRes.json();
  const cloudRes = await fetch(process.env.API_URL + "/clouds");
  const { data: Clouds } = await cloudRes.json();
  const mlRes = await fetch(process.env.API_URL + "/mls");
  const { data: MLS } = await mlRes.json();
  const projectRes = await fetch(process.env.API_URL + "/projects");
  const { data: Projects } = await projectRes.json();
  const biodataRes = await fetch(process.env.API_URL + "/biodatas");
  const { data: Biodata } = await biodataRes.json();
  return {
    props: { Languages, Webs, Mobiles, Clouds, MLS, Projects, Biodata },
  };
}
