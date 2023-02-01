import { OutputText, TextInput } from '../../components';
import HomeWrapper from './homeWrapper.css';

function home() {
  return (
    <HomeWrapper>
      <article className='inputText'>
        Enter text:
        <TextInput />
      </article>
      <article className='outputText'>
        Your text to binary:
        <OutputText />
      </article>
    </HomeWrapper>
  );
}
export default home;
