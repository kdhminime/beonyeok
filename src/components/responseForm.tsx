import "./components.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setNewInput,
} from "../features/counter/responseSlice";
import CopyButton from "./CopyButton";
import { useState } from "react";

export default function ResponseForm({ message }: { message: string}) {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.response.input);

  const [slide, setSlide] = useState(false);
  const toggleSlide = () => setSlide(!slide);

  return (
    <div className={`container slide-down`}>
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title">Translation</span>
          <button className="button button--icon">
            <svg
              width="24"
              viewBox="0 0 24 24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </button>
        </div>
        <div className="modal__body">
          <div className="original-input">
            <label className="input__label">Original Text</label>
            <textarea
              className="input__field input__field--textarea"
              value={input}
              onChange={(e) => dispatch(setNewInput(e.target.value))}
            ></textarea>
          </div>
          <div className="input">
            <label className="input__label">Translated Text</label>
            <textarea className="input__field input__field--textarea">
              {message}
            </textarea>
            <CopyButton message={message} />
          </div>
        </div>
        <div className="modal__footer">
          <button
            className="button button--primary"
            onClick={() => {
              toggleSlide();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
