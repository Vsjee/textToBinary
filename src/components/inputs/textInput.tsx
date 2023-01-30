import TextField from '@mui/material/TextField';

function TextInput() {
  return (
    <TextField
      fullWidth
      id='filled-multiline-static'
      label='Write or paste your text.'
      multiline
      rows={12}
      variant='filled'
    />
  );
}
export default TextInput;
