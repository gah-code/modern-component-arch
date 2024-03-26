import React from 'react';
import styled from 'styled-components';

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol>{children}</ol>
    </nav>
  );
};

const Crumb = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default Breadcrumbs;
