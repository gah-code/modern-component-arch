import GlobalStyles from './GlobalStyles';
import LoginForm from './LoginForm';
import FrequentlyAskedQuestion from './FrequentlyAskedQuestions';
import ContentCard from './ContentCard';
import Button from './Buttons';
import WallArt from './WallArt';
import styled from 'styled-components';

const Divider = styled.div`
  padding: 3rem 0;
`;

const App = () => (
  <>
    <FrequentlyAskedQuestion
      question='What does “CSS” stand for?'
      answer='Cool Styling Strategy'
    />
    <Divider />
    <LoginForm
      handleSubmit={(ev) => {
        ev.preventDefault();
        alert('Submitted!');
      }}
    />
    <Divider />
    <ContentCard
      avatarSrc='https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg'
      name='Mittens'
      email='meow@gmail.com'
    />
    <Divider />
    <Button color='green'>Hello world</Button>
    <Divider />
    <WallArt
      src='https://courses.joshwcomeau.com/cfj-mats/wall-art.jpg'
      alt='A hallway with rainbow lights'
      caption='Photo by Efe Kurnaz'
      width={250}
    />
    <GlobalStyles />
  </>
);

export default App;
