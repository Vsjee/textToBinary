import { OutputText, TextInput } from '../../components';
import HomeWrapper from './homeWrapper.css';

function home() {
  return (
    <HomeWrapper>
      <article className='inputText'>
        <TextInput />
      </article>
      <article className='outputText'>
        <OutputText />
      </article>
    </HomeWrapper>
  );
}
export default home;
