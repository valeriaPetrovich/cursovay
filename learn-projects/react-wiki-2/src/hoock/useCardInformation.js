
import { useDispatch, useSelector } from 'react-redux';
import { setCaracterInformation } from '../store/reducer/cardInformationSlice';
import useMeals from './useMeals';

const useCardInformation = () => {
	const dispatch = useDispatch();
	const {} = useMeals();
	const results = useSelector((state) => state.results.values);
    
    const changedData = results.map((mas)=>{mas.map((component)=>{
        return {
            number: component.device_serial_number,
            id: component.idMeal,
            img: component.strMealThumb,
            name: component.strMeal,
            categore: component.strCategory
        };
})})
    dispatch(setCaracterInformation(changedData));
};

export default useCardInformation;
