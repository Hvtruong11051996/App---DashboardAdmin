import React, { useEffect } from 'react';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';
import Routes from '../Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import TopNav from '../topnav/TopNav';
import { useDispatch, useSelector } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction'


function Layout(props) {

  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    dispatch(ThemeAction.setMode(themeClass))

    dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])

  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props}></Sidebar>
          <div className="layout__contents">
            <TopNav></TopNav>
            <div className="layout__contents-main">
              <Routes></Routes>
            </div>
          </div>
        </div>
      )} />
    </BrowserRouter>
  );
}

export default Layout;