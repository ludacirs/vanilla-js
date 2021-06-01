import Component from "../lib/Component";

class Navigator extends Component{
    setup() {
        this.$elem = document.createElement('nav');
        super.setup();
    }
    setEvent() {
        const {handleClick} = this.state;
        this.addEvent('click', '.item', handleClick);
    }

    template() {
        return `
        <ul class="list">
            <li class="item">
                <a href="#" data-link="/">Home</a>
            </li>
            <li class="item">
                <a href="#" data-link="/router">Router</a>
            </li>
            <li class="item">
                <a href="#" data-link="/about">About</a>
            </li>   
        </ul>`
    }
}


export default Navigator