import styled from 'styled-components';

function WallArt({ src, alt, caption, width }) {
  const height = width;
  return (
    <Wrapper className='wall-art-wrapper'>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
        }}
      />
      <p className='caption'>{caption}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 8px;
  position: relative;
  isolation: isolate;
  background: white;
  box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028),
    0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061),
    0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
