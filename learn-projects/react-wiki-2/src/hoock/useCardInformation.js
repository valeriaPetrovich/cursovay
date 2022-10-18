
import { useDispatch, useSelector } from 'react-redux';
import { setCaracterInformation } from '../store/reducer/cardInformationSlice';
import useMeals from './useMeals';

const useCardInformation = () => {
	const dispatch = useDispatch();
	const {fetcheMeals} = useMeals();
    const inform = useSelector((state) => state.cardInf.values);
    const changedData = fetcheMeals.map((mas)=>{mas.map((component)=>{
        return {
            number: component.device_serial_number,
            id: component.idMeal,
            img: component.strMealThumb,
            name: component.strMeal,
            categore: component.strCategory
        };
})})
    dispatch(setCaracterInformation(changedData));
    return { inform };
};

export default useCardInformation;
