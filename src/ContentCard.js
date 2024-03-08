import styled from 'styled-components';

function ContentCard({ avatarSrc, name, email }) {
  return (
    <Wrapper className='content-card'>
      <Avatar src={avatarSrc} alt='' className='avatar' />
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Wrapper>
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

const Avatar = styled.img``;

const Name = styled.h2``;

const Email = styled.p``;

export default ContentCard;
