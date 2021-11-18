// routes
import Router from './routes';
// theme
import ThemeConfig from './theme/Theme';
import './App.css';

function App() {
  return (
    <ThemeConfig>
      {/* <ScrollToTop /> */}
      {/* <GlobalStyles /> */}
      {/* <BaseOptionChartStyle /> */}
      <Router />
    </ThemeConfig>
  );
}

export default App;
