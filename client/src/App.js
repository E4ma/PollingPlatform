import styled from 'styled-components'
import './app.scss'
import VoteBoard from './components/VoteBoard'


const AppContainer = styled.div`
  * {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
  }
`;

function App() {


  

  return (
<AppContainer>
Voting Pad
      <VoteBoard />
</AppContainer>
  );
}

export default App;
