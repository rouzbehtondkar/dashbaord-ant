import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RouteUnauthorize from '../../route/RouteUnauthorized';
import Authoriz from '../authorized/Authoriz';

export default function Layout() {
  const [token,setToken] = useState(false);

  return (
    <Routes>
      {token ? (
        <Route path='/*' element={<Authoriz/>} />
      ) : (
        <Route path='/*' element={<RouteUnauthorize/>} />
      )}
    </Routes>
  );
}
