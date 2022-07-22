import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchFeat, fetchNav } from "./redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoutes";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Admission from "./pages/admission/Admission";
import Contacts from "./pages/contacts/Contacts";
import NewsandEvents from "./pages/news/NewsandEvents";
import RegistrationForm from "./pages/registration-form/registration";
import Header from "./component/header/Header";

function App() {
  const auth = useSelector((state: any) => state.login.isAuthenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchFeat());
    dispatch<any>(fetchNav());
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          {/* <ProtectedRoute auth={auth} exact path="/" component={Header}/> */}
          <Route path="/registrationform" component={RegistrationForm}/>
          <ProtectedRoute auth={auth} exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute auth={auth} exact path="/about" component={About} />
          <ProtectedRoute auth={auth}  path="/admission" component={Admission} />
          <ProtectedRoute auth={auth}  path="/contacts" component={Contacts} />
          <ProtectedRoute auth={auth}  path="/newsandevents" component={NewsandEvents} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
