import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/state.hooks";
import { updateTestState } from "./state/slices/invoiceSlice";

function App() {
  const dispatch = useAppDispatch();
  const testState = useAppSelector((state) => state.invoices.test);

  const handleTestClick = (): void => {
    dispatch(updateTestState({ amount: 1 }));
  };

  return <div onClick={handleTestClick}>Placeholder element: {testState}</div>;
}

export default App;
