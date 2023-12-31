import React, { useEffect, useState } from 'react';
import SmallCard from "./SmallCard"

const Research = ({ data }) => {

  return (
    <SmallCard>
      <section id="service">
          <div key={data.id ? data.id : "null"}>
            <h2>
              <a rel='noopener noreferrer' href={data.href.startsWith('http') ? data.href : `http://${data.href}`}>{data.title ? data.title : "null"}</a>
            </h2>
            <p>{data.content ? data.content: "null"}</p>
          </div>
      </section>
    </SmallCard>
  );
};

export default Research;
