import { useEffect, useState } from 'react';
import { HistoryInfo } from '../../models';
import { historyKey } from '../../redux/state/history';
import { getLocalStorage } from '../../utilities';
import HistoryWrapper from './HistoryWrapper.css';

function History() {
  const [history, setHistory] = useState<HistoryInfo[]>();

  const saveHistory = () => {
    const data: HistoryInfo[] = getLocalStorage(historyKey);
    setHistory(data);
  };

  useEffect(() => {
    saveHistory();
  }, []);

  return (
    <HistoryWrapper>
      <ul>
        {history?.map((item, i) => (
          <li key={i}>
            {item.inputText}: {item.outputText} <button>delete</button>
          </li>
        ))}
      </ul>
    </HistoryWrapper>
  );
}
export default History;
