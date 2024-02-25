import OpenAI from 'openai';
import { OPENAI_KEY } from '../utils/constant';
// auth for openai
const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default openai;