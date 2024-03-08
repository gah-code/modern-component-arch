import styled from 'styled-components';

function ContentCard({ avatarSrc, name, email }) {
  return (
    <article className='content-card'>
      <img src={avatarSrc} alt='' className='avatar' />
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
}

const Wrapper = styled.article`
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
`;

export default ContentCard;
