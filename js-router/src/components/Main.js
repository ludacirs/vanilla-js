import Component from "../lib/Component";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import {initRouter} from "../lib/router";

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/about', component: AboutPage},
    {path: '/home', component: HomePage},
];

class Main extends Component{
    constructor(props) {
        super(props);
        initRouter(this.$elem,routes);
    }
}

export default Main;