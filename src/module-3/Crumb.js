import styled from 'styled-components';
import React from 'react';

const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? 'page' : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);
  }

  &:before {
    content: '/';
    opacity: 0.55;
    margin-right: var(--spacing);
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

export default Crumb;
