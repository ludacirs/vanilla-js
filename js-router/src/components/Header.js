import Component from "../lib/Component.js";
import Navigator from "./Navigator.js";
import {$router} from "../lib/router";

class Header extends Component{
    constructor(props) {
        super(props);
        this.$nav = new Navigator(this.$elem, {
            handleClick : this.handleClick
        });
    }

    handleClick(e){
        e.preventDefault();
        const link = e.target.dataset.link;
        $router.push(link);
        console.log(link);
    }
}
export default Header