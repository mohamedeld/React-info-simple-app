import { useCallback, useState } from "react";
import CoreConceptContainer from "./components/CoreConcept/CoreConceptContainer";
import { EXAMPLES } from "./data/core";
import Header from "./components/Header";
import TabButton from "./components/Tab/TabButton";
import "./App.css";

function App() {
  const [tabContent, setTabContent] = useState("components");
  const handleSelect = useCallback((selectedBtn) => {
    setTabContent(selectedBtn);
  }, []);
  console.log("App component rendering");
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConceptContainer />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent ==='components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={tabContent ==='jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={tabContent ==='props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={tabContent ==='state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
