import React from 'react';
import './App.css';
import AuthPage from "./pages/AuthPage/AuthPage";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./router/PrivateRoute";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <PrivateRoute exact path="/" component={DashboardPage}/>
                <Route exact path="/login" component={AuthPage}/>
            </Router>
        </AuthProvider>
    );
}

export default App;
