import { OutputText, TextInput } from './components';
import AppWrapper from './AppWrapper.css';

function App() {
  return (
    <AppWrapper>
      <article className='inputText'>
        <TextInput />
      </article>
      <article className='outputText'>
        <OutputText />
      </article>
    </AppWrapper>
  );
}

export default App;
