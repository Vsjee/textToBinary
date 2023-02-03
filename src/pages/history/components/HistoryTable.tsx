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
import { HistoryInfo } from '../../../models';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, historyKey, removeHistoryItem } from '../../../redux';
import { setLocalStorage } from '../../../utilities';
import { useEffect } from 'react';

interface Props {
  history: HistoryInfo[];
}

function HistoryTable({ history }: Props) {
  const dispatch = useDispatch();
  let data: HistoryInfo[] = useSelector((state: AppState) => state.history.history);

  const deleteHistoryItem = (data: HistoryInfo) => {
    dispatch(removeHistoryItem({ inputText: data.inputText, outputText: data.outputText }));
    console.log('test');
  };

  useEffect(() => {
    setLocalStorage(historyKey, data);
  }, [data]);

  return (
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
                  onClick={() =>
                    deleteHistoryItem({ inputText: item.inputText, outputText: item.outputText })
                  }
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
  );
}
export default HistoryTable;
