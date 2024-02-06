import { translateGPT } from "./api/translateGPT";
import InputForm from "./components/InputForm";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  setLoading,
  setLoadingState,
  pushNewResponse,
} from "./features/counter/responseSlice";
import Loader from "./components/Loader";
import { useState } from "react";
import ResponseForm from "./components/responseForm";

function App() {
  const [message, setMessage] = useState("");
  const dispatch: any = useAppDispatch();
  const input: string = useAppSelector((state) => state.response.input);
  const additionalInfo: string = useAppSelector((state) => state.response.additionalInfo);
  const loading : boolean = useAppSelector((state) => state.response.loading);
  const chatHistory: any[] = useAppSelector((state) => state.response.chatHistory);
  // This function is called when the button is clicked
  const handleClick = async (): Promise<void> => {
    dispatch(setLoading()); 
    dispatch(pushNewResponse({
      role: "user",
      content: (input + "  (" + additionalInfo + ")"),
    }))
    const response = await translateGPT([
      ...chatHistory,
      {
        role: "user",
        content: input + "  (" + additionalInfo + ")",
      },
    ]);

    setTimeout(() => {
      dispatch(setLoadingState(-1));
    },2000);

    setTimeout(() => {
      dispatch(setLoading());
      dispatch(setLoadingState(1));
      if(response !== null){
        setMessage(response);
      }
    },3500);

    
  };

  return (
    <div className="App">
      {loading && <Loader />}
      <InputForm clickHandler={handleClick} />
      {message && <ResponseForm message={message}/>}
    </div>
  );
}

export default App;
