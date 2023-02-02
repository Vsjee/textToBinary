import { useEffect, useState } from 'react';
import { HistoryInfo } from '../../models';
import { historyKey } from '../../redux/state/history';
import { getLocalStorage } from '../../utilities';
import HistoryWrapper from './HistoryWrapper.css';
import HistoryTable from './components/HistoryTable';

function History() {
  const [history, setHistory] = useState<HistoryInfo[] | any>();

  const saveHistory = () => {
    const data: HistoryInfo[] = getLocalStorage(historyKey);
    setHistory(data);
  };

  useEffect(() => {
    saveHistory();
  }, []);

  return (
    <HistoryWrapper>
      <HistoryTable history={history} />
    </HistoryWrapper>
  );
}
export default History;
