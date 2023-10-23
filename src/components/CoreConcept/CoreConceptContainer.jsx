import { CORE_CONCEPTS } from "../../data/core"
import CoreConceptItem from "./CoreConceptItem"

const CoreConceptContainer = () => {
  return (
    <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map(core=>( 
            <CoreConceptItem core={core} key={core.title}/>
        ))}
        </ul>
    </section>
  )
}

export default CoreConceptContainer