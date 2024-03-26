import React from 'react';

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol>{children}</ol>
    </nav>
  );
};

export default Breadcrumbs;
