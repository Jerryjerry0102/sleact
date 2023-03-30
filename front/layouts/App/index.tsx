import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route, Navigate } from 'react-router-dom';

// 코드 스플리팅(페이지 단위로)
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Navigate replace to="/login" />} />
      <Route path={'login/*'} element={<LogIn />} />
      <Route path={'signup'} element={<SignUp />} />
      <Route path="workspace">
        <Route path={'channel'} element={<Channel />} />
        <Route path={'dm'} element={<DirectMessage />} />
      </Route>
    </Routes>
  );
};

export default App;
