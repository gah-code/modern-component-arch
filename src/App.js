import GlobalStyles from './GlobalStyles';
import LoginForm from './LoginForm';
import FrequentlyAskedQuestion from './FrequentlyAskedQuestions';
import ContentCard from './ContentCard';
import Button from './Buttons';
import WallArt from './WallArt';

const App = () => (
  <>
    <FrequentlyAskedQuestion
      question='What does “CSS” stand for?'
      answer='Cool Styling Strategy'
    />
    <LoginForm
      handleSubmit={(ev) => {
        ev.preventDefault();
        alert('Submitted!');
      }}
    />
    <ContentCard
      avatarSrc='https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg'
      name='Mittens'
      email='meow@gmail.com'
    />
    <Button color='green'>Hello world</Button>
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
