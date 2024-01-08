import App from 'components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';

const AppLoader = () =>{
    return(
        <Router>
            <App/>
        </Router>
    )
}
export default AppLoader;