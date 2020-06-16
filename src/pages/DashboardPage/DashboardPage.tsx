// @flow
import * as React from 'react';
import Button from "react-bootstrap/Button";
import firebaseApp from "../../firebase/auth/firebaseAuth"
import {useHistory} from "react-router";


const DashboardPage = () => {
    const history = useHistory();
    const logOutHandler = async (e: any) => {
        e.preventDefault();
        try {
            const result = await firebaseApp.auth().signOut();
            history.push("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <React.Fragment>
            <Button variant="primary" onClick={logOutHandler} className="btn-block" type="button">
                Logout
            </Button>
        </React.Fragment>
    );
}


export default DashboardPage;
// export class DashboardPage extends React.Component<Props> {
//     render() {
//         return (
//             <>
//                 <p>Its working ladys and gentlment</p>
//             </>
//         );
//     };
// };
