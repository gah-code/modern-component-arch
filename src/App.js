import GlobalStyles from './GlobalStyles';
import LoginForm from './LoginForm';
import FrequentlyAskedQuestion from './FrequentlyAskedQuestions';
import ContentCard from './ContentCard';
import Button from './Buttons';

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
    <GlobalStyles />
  </>
);

export default App;
