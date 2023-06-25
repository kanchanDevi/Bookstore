import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const arr=useRouteError()
  return (
    <>
    <h1>{arr.status+" : "+ arr.statusText}</h1>
    </>
  )
}

export default Error