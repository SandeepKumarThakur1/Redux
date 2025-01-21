import CounterApp from "./components/CounterApp";

function App() {
  return (
    <>
      <div className="bg-gray-900 p-5 text-white font-sans text-xl">
        <h1>Redex | Let's Start</h1>
      </div>
      <div className="h-screen flex items-center justify-center text-3xl">
        <CounterApp />
      </div>
    </>
  );
}

export default App;
