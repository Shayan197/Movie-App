import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import ExplorePage from '../Pages/ExplorePage'
import DetailePage from '../Pages/DetailePage'
import SearchPage from '../Pages/SearchPage'
import Home from '../Pages/Home'

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : ':explore',
                element : <ExplorePage/>
            },
            {
                path : ':explore/:id',
                element : <DetailePage/>
            },
            {
                path : 'search',
                element : <SearchPage/>
            },
        ]
    }
]);

export default router;