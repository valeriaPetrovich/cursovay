import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import useMeals from "../../hoock/useMeals";
import { useSelector } from "react-redux";


const Cards = () => {
  const {fetcheMeals} = useMeals();
  const search = useSelector((state) => state.search.values);
  const filter = fetcheMeals.map((e)=>{
    e.filter((el)=>{
      return el.strMeal === search;
    })
  })
  let display;
  if (fetcheMeals) {
    //если ввели имя которое есть в списке api
    display = fetcheMeals.map((x) => x.map((el) => {
 
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${el.idMeal}`}
          key={el.idMeal}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={styles.cards}>
            <img alt="" src={el.strMealThumb} className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className={styles['text-catd']}>{el.strMeal}</div>
            </div>
          </div>
          <div
            className={`${styles.badge} position-absolute badge bg-light text-dark`}
          >
            {el.strCategory}{" "}
          </div>
        </Link>
      );
    })
    );
  } else {
    //иначе выводит фразу, что его нет
    display = "No Meals Found";
  }
  return <>{display}</>;
};
export default Cards;

/**
 * import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Input, Menu, Dropdown } from 'antd';
import { debounce } from 'lodash';
import useFilters from '../../hooks/useFilters';

const SearchFeatures = () => {
	const [search, setSearch] = useState('');
	const { fetchFeatureSlice, fetchGroupsSlice, fetchComponentSlice, feature, group, component } =
		useFilters();
	useEffect(() => {
		fetchFeatureSlice();
		fetchComponentSlice();
		fetchGroupsSlice();
	}, []);
	const filterfeatureSlice = component.filter((e) => {
		if (search !== '') {
			return e.name.toLowerCase().includes(search);
		}
	});
	const filterGroup = group.filter((e) => {
		if (search !== '') {
			return e.name.toLowerCase().includes(search);
		}
	});
	const filterFilter = feature.filter((e) => {
		if (search !== '') {
			return e.name.toLowerCase().includes(search);
		}
	});
	const menu = () => {
		return (
			<Menu
				className={styles.dropdown}
				items={[
					{
						key: '1',
						label: filterfeatureSlice.length > 0 && (
							<ul>
								<span>Components:</span> <br></br>
								{filterfeatureSlice.map((x) => (
									<li key={x.id}>{x.name}</li>
								))}
							</ul>
						)
					},
					{
						key: '2',
						label: filterGroup.length > 0 && (
							<ul>
								<span>Group:</span> <br></br>
								{filterGroup.map((x) => (
									<li key={x.id}>{x.name}</li>
								))}
							</ul>
						)
					},
					{
						key: '3',
						label: filterFilter.length > 0 && (
							<ul>
								<span>Feature:</span> <br></br>
								{filterFilter.map((x) => (
									<li key={x.id}>{x.name}</li>
								))}
							</ul>
						)
					}
				]}
			/>
		);
	};
 */