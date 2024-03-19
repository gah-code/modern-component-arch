// Dynamic Styles
import styled from 'styled-components';
// Interpolation functions: API leverages tagged template literals.

const Button = ({ color, onClick, children }) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  // Interpolation syntax
  color: ${(props) => props.color};
  padding: 16px 24px;

  @media (min-width: 1200px) {
    color: red;
  }
`;

export default Button;

// CSS Variables (AKA CSS Custom Properties

// const Button = ({ color, onClick, children }) => {
//   return (
//     <Wrapper onClick={onClick} style={{ '--color': color }}>
//       {children}
//     </Wrapper>
//   );
// };

// const Wrapper = styled.button`
//   color: var(--color);
//   padding: 16px 24px;
// `;
