import React, { useMemo } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Expensive from "./components/Expensive";

export default function App() {
  const list = ["a", "b", "c"];
  const expensive = useMemo(() => <Expensive list={list} />, [list]);
  return (
    <>
      <Layout footer={<Footer />}>
        <h3>
          It's Friday again
          <br /> Then Saturday, Sunday, what?
        </h3>
      </Layout>
      {expensive}
    </>
  );
}
