import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, ReactNode, useCallback } from 'react';
import { Navigate } from 'react-router';
import useSWR from 'swr';

interface P {
  children: ReactNode | undefined;
}

const Workspace: FC<P> = ({ children }) => {
  const { data, error, isValidating, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios.post('http://localhost:3095/api/users/logout', null).then(() => {
      mutate(false, false);
    });
  }, []);

  if (!data) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
