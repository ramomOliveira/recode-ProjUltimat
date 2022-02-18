import { useContext } from 'react';
import AppContext from '../context/App';

const useAppData = () => useContext(AppContext);

export default useAppData;
