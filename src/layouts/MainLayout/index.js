import React from 'react';
import PropTypes from 'prop-types';

import { GridContainer } from 'components';
import TopBar from './TopBar';

const MainLayout = ({ children }) => (
  <div>
    <TopBar />
    <GridContainer className='MainLayout-container' data-cy='main-layout-container'>
      {children}
    </GridContainer>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
