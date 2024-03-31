import React from 'react';
import styled from 'styled-components';

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
`;

export default Breadcrumbs;
