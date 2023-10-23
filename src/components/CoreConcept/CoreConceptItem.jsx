import React from "react";

const CoreConceptItem = ({core}) => {
  return (
            <li key={core.title}>
                <img src={core.image} alt={core.title} />
                <h3>{core.title}</h3>
                <p>{core.description}</p>
            </li>
  )
}

export default CoreConceptItem