import TextField from '@mui/material/TextField';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryInfo } from '../../models';
import { addHistoryItem, historyKey } from '../../redux/state/history';
import { updateText } from '../../redux/state/text';
import { AppState } from '../../redux/store';
import { setLocalStorage, toBinary } from '../../utilities';

function TextInput() {
  const dispatch = useDispatch();
  const historyState = useSelector((state: AppState) => state.history.history);

  const [text, setText] = useState<string>('');

  const handleForm = (e: FormEvent<HTMLInputElement | any>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  const handleSaveText = (e: FormEvent, text: string) => {
    e.preventDefault();
    let bin = toBinary(text);
    dispatch(updateText({ text: bin }));
    dispatch(addHistoryItem({ inputText: text, outputText: bin }));
    setLocalStorage<HistoryInfo[]>(historyKey, historyState);
  };

  return (
    <form onSubmit={(e) => handleSaveText(e, text)}>
      <TextField
        fullWidth
        id='text'
        label='Write or paste your text.'
        multiline
        rows={12}
        variant='filled'
        type='text'
        onChange={handleForm}
      />
      <TextField color='primary' type='submit' />
    </form>
  );
}
export default TextInput;
