import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components';
import ButtonTable from '../ButtonTable';
import Breadcrumbs from '../module-3/Breadcrumbs';
import Crumb from '../module-3/Crumb';

const Divider = styled.div`
  padding: 4rem 0;
`;

export default function Root() {
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <Divider />
        <Breadcrumbs>
          <Crumb href={'/'}>Home</Crumb>
          <Crumb href='/buttons'>Buttons</Crumb>
          <Crumb href={'/components/1'}>Components</Crumb>
          <Crumb href={'/components/2'}>Components</Crumb>
          <Crumb href={'/components/3'}>Components</Crumb>
          <Crumb href={'/tricks'} isCurrentPage={true}>
            Tricks
          </Crumb>
        </Breadcrumbs>
        <Divider />
        <ButtonTable />
        <Divider />
      </div>
      <div id='detail'></div>
      <GlobalStyles />
    </>
  );
}
