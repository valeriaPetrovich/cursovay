import React from "react";
import styles from './styles.module.scss';
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import MainFirstContainer from "./MainFirstContainer";
import MainSecondContainer from "./MainSecondContainer";
import MainThirdComponent from "./MainThirdContainer";

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