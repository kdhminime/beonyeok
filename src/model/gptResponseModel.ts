import MessageModel from './messageModel';

// Purpose: Model for the GPT response.
export default interface GptResponse {
  finish_reason: string;
  index: number;
  message: MessageModel;
  role: string;
  logprobs: null | string;
}
