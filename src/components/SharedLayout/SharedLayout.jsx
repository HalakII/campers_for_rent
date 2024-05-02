import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.root}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
