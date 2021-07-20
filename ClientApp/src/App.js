import React, { useMemo, useCallback } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Expensive from "./components/Expensive";

export default function App() {
  const list = ["a", "b", "c"];

  const onSubmit = useCallback((parameters) => {
    console.log(parameters);
  }, []);

  const expensive = useMemo(
    () => <Expensive list={list} onSubmit={onSubmit} />,
    [list, onSubmit]
  );
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
