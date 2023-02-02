import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { HistoryInfo } from '../../models';
import { historyKey, removeHistoryItem } from '../../redux/state/history';
import { getLocalStorage } from '../../utilities';
import HistoryWrapper from './HistoryWrapper.css';

function History() {
  const dispatch = useDispatch();
  const [history, setHistory] = useState<HistoryInfo[]>();

  const saveHistory = () => {
    const data: HistoryInfo[] = getLocalStorage(historyKey);
    setHistory(data);
  };

  const deleteHistoryItem = () => {
    // dispatch(removeHistoryItem({ inputText: '', outputText: '' }));
    console.log('test');
  };

  useEffect(() => {
    saveHistory();
  }, []);

  return (
    <HistoryWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>History</TableCell>
              <TableCell align='right'>inputText</TableCell>
              <TableCell align='right'>outputText</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history?.map((item, i) => (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {i + 1}
                </TableCell>
                <TableCell align='right'>{item.inputText}</TableCell>
                <TableCell align='right'>{item.outputText}</TableCell>
                <TableCell align='right'>
                  <Button
                    onClick={() => deleteHistoryItem()}
                    variant='outlined'
                    size='small'
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HistoryWrapper>
  );
}
export default History;
