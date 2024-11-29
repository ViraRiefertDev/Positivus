import Header from './components/Header/Header/MainHeader';
import GlobalStyles from './styles/GlobalStyles';
import { AppContainer } from './appStyles';
import Main from './components/Main/Main/Main';
import Footer from './components/Footer/Footer/Footer';
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
