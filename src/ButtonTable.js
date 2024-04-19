import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ButtonTable = () => {
  return (
    <Table>
      <tr>
        <th></th>
        <th>Fill</th>
        <th>Outline</th>
        <th>Ghost</th>
      </tr>
      <tr>
        <td>Small</td>
        <td>
          <Button size='small' variant='fill'>
            Button
          </Button>
        </td>
      </tr>
    </Table>
  );
};

const Table = styled.table`
  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
`;

export default ButtonTable;
