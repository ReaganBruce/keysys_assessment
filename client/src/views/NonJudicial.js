import React, { useEffect, useState } from "react";
import NonJudicialDetails from "../components/NonJudicialDetails";

const NonJudicial = () => {
  const [nonJudicialData, setNonJudicialData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/invoices/nonjudicial");
        const data = await res.json();
        setNonJudicialData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <main className="container px-1">
        <section className="row-lg-12 d-flex flex-row flex-wrap px-1 p-4">
          <NonJudicialDetails nonJudicialData={nonJudicialData} />
        </section>
      </main>
    </>
  );
};

export default NonJudicial;
