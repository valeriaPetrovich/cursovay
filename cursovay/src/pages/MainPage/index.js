import React from "react";
import styles from './styles.module.scss';
import Header from "../../components/Header";
import MainFirstContainer from "./MainFirstContainer";
import MainSecondContainer from "./MainSecondContainer";
import MainThirdComponent from "./MainThirdContainer";
import Menu from "../../components/Menu";

const MainPage = () => {
  return (
<div className="container">
<div className={styles.main}> 
<Header>
<Menu/>
</Header>
<MainFirstContainer/>
<MainSecondContainer/>
<MainThirdComponent/>
</div>
</div>
  );


};


export default MainPage;