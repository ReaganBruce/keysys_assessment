import React, { useEffect, useState } from "react";
import JudicialDetails from "../components/JudicialDetails";

const Judicial = () => {
  const [judicialData, setJudicialData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/invoices/judicial");
        const data = await res.json();
        setJudicialData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <main className="container px-1">
        <section className="row-lg-12 d-flex flex-row flex-wrap px-1 p-4">
          <JudicialDetails judicialData={judicialData} />
        </section>
      </main>
    </>
  );
};

export default Judicial;
