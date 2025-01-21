import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/features/counterSlice";

function CounterApp() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>Count : {count}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="bg-slate-700 py-1 px-3 rounded-md ml-2 text-lg"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-slate-700 py-1 px-3 rounded-md ml-2 text-lg"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default CounterApp;
