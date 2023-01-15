import React from "react";
import styles from "./PeoplePage.module.css";
import { useState, useEffect } from "react";

import { getApiResource } from "../../utils/network";
import { API__PEOPLE } from "../../constants/api";
import { getPeopleId } from "../../services/getPeopleData";
import { getPeopleImage } from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";


const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
     
      return {
        id,
        name,
        img
      };
    }); 
 
    setPeople(peopleList);
 
  };
  useEffect(() => {
    getResource(API__PEOPLE);
  }, []);
  return <>
  {people && (
<PeopleList people={people}/>
  ) }

  </>;
};
export default PeoplePage;
