import { useEffect, useState } from 'react';
import { HistoryInfo } from '../../models';
import { historyKey } from '../../redux/state/history';
import { getLocalStorage } from '../../utilities';
import HistoryWrapper from './HistoryWrapper.css';
import HistoryTable from './components/HistoryTable';

function History() {
  const [history, setHistory] = useState<HistoryInfo[] | any>();
  const [bol, setBol] = useState(false);

  const saveHistory = () => {
    const data: HistoryInfo[] = getLocalStorage(historyKey);
    setHistory(data);
  };

  const modifyHistory = (data: HistoryInfo[], rerender: boolean) => {
    setBol(rerender);
    setHistory(data);
  };

  useEffect(() => {
    saveHistory();
  }, [bol]);

  return (
    <HistoryWrapper>
      <HistoryTable history={history} modifyHistory={modifyHistory} />
    </HistoryWrapper>
  );
}
export default History;
