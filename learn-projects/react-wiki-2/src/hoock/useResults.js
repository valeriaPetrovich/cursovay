import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../store/reducer/resultsSlice';
import useMeals from './useMeals';

const useResults = () => {
	const dispatch = useDispatch();
	const {fetcheMeals} = useMeals()
	const results = useSelector((state) => state.results.values);
	const fetchResults = () => {
		fetcheMeals.map((e)=>{
			return	dispatch(setResults(e));
	})
	};

	return { fetchResults, results };
};

export default useResults;
