import { Form, Preview } from "./components";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="h-auto lg:h-screen flex flex-wrap lg:flex-nowrap overflow-hidden">
      <Form handlePrint={handlePrint} className="bg-white"  />
      <div className="w-full lg:w-3/5">
        <Preview ref={printRef}/>
      </div>
    </div>
  );
}

export default App;
