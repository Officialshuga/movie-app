import React from 'react'
import { useParams } from 'react-router-dom'
import PopularPeopleDetails from '../../hooks/peopledeatails';

const peopleDetails = () => {
  const { id } = useParams();
  return (
    <div>peopleDetails</div>
  )
}

export default peopleDetails