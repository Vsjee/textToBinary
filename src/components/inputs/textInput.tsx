import TextField from '@mui/material/TextField';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateText } from '../../redux/state/text';
import { toBinary } from '../../utilities';

function TextInput() {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');

  const handleForm = (e: FormEvent<HTMLInputElement | any>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  const handleSaveText = (e: FormEvent, text: string) => {
    e.preventDefault();
    let bin = toBinary(text);
    dispatch(updateText({ text: bin }));
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
