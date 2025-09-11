import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import NotFound from "./components/notFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/" element={<Home />} />
        <Route path="about/" element={<AboutMe />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
