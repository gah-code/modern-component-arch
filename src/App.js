import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import ButtonTable from './ButtonTable';
import Breadcrumbs from './module-3/Breadcrumbs';
import Crumb from './module-3/Crumb';

const Divider = styled.div`
  padding: 4rem 0;
`;

const App = () => (
  <>
    <Breadcrumbs>
      <Crumb href='/'>Home</Crumb>
      <Crumb to='/living' href='/living'>
        Living Room
      </Crumb>
      <Crumb href='/living/couch'>Couches</Crumb>
      <Crumb href='/living/couch/sectional' isCurrentPage={true}>
        Sectionals
      </Crumb>
    </Breadcrumbs>
    <Divider />
    <ButtonTable />
    <Divider />
    <GlobalStyles />
  </>
);

export default App;

{
  /* <Breadcrumbs>
      <Crumb href='/'>Home</Crumb>
      <Crumb href='/living'>Living Room</Crumb>
      <Crumb href='/living/couch'>Couches</Crumb>
      <Crumb href='/living/couch/sectional' isCurrentPage={true}>
        Sectionals
      </Crumb>
    </Breadcrumbs>
    <Divider />
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

    <Divider />
    <WallArt
      src='https://courses.joshwcomeau.com/cfj-mats/wall-art.jpg'
      alt='A hallway with rainbow lights'
      caption='Photo by Efe Kurnaz'
      width={250}
    /> */
}
