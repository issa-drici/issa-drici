import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

// https://mui.com/material-ui/react-card/
// https://material-kit-pro-react.devias.io/dashboard
// http://matx-react.ui-lib.com/dashboard/default