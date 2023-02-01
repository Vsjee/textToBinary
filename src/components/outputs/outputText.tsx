import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

function OutputText() {
  const text = useSelector((state: AppState) => state.text.text);

  return <section>{text}</section>;
}
export default OutputText;
