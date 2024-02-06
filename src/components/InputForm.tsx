import "./components.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setNewInput,
  setNewAdditionalInfo,
} from "../features/counter/responseSlice";
import { useState } from "react";

export default function InputForm({
  clickHandler,
}: {
  clickHandler: () => void;
}) {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.response.input);
  const additionalInfo = useAppSelector((state) => state.response.additionalInfo);
  
  const [slide, setSlide] = useState(false);
  const toggleSlide = () => setSlide(!slide);
  const removeNewLine = () => {
    dispatch(setNewInput(input.replace(/\n/g, " ")));
  }

  return (
    <div className={`container ${slide ? "slide-up" : ""}`}>
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
          <div className="input">
            <label className="input__label">
              Text{" "}
              <button
                className="button remove-new-line"
                onClick={removeNewLine}
              >
                Remove New Line
              </button>
            </label>

            <textarea
              className="input__field input__field--textarea"
              value={input}
              onChange={(e) => dispatch(setNewInput(e.target.value))}
            ></textarea>
            <p className="input__description">
              Korean text that will be translated into English
            </p>
          </div>
          <div className="input">
            <label className="input__label">Additional Information</label>
            <input
              className="input__field"
              type="text"
              onChange={(e) => dispatch(setNewAdditionalInfo(e.target.value))}
              value={additionalInfo}
            />
            <p className="input__description">
              Additional information that will help translation
            </p>
          </div>
        </div>
        <div className="modal__footer">
          <button
            className="button button--primary"
            onClick={() => {
              clickHandler();
              toggleSlide();
            }}
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}
