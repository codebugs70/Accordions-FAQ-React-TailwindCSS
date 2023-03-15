import "./App.css";

/* import Accordion component */
import Accordion from "./components/Accordion";

/* import data to use */
import { accordions } from "./Data";

function App() {
  return (
    <div className="wrapper mt-20">
      <h1 className="text-center text-5xl font-semibold mb-10">FAQ</h1>

      {/* main content here */}
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {/* passing two props to this component */}
              <Accordion question={question} answer={answer}></Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
