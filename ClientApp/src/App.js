import React from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Layout footer={<Footer />}>
      <h3>
        It's Friday again
        <br /> Then Saturday, Sunday, what?
      </h3>
    </Layout>
  );
}
