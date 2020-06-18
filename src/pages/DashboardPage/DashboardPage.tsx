import * as React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import CustomNavbar from "../../components/CustomNavBar/CustomNavbar";
import PrivateRoute from "../../router/PrivateRoute";
import HighLowPage from "../HighLowPage/HighLowPage";


const DashboardPage = () => {

    return (
        <React.Fragment>
            <Router>
                <CustomNavbar/>
                <Switch>
                    <PrivateRoute exact path="/high-low" component={HighLowPage}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}


export default DashboardPage;
