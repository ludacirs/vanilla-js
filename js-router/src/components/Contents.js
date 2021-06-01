import Component from "../lib/Component";

class Contents extends Component{

    template() {
        const {title, text} = this.state;
        return `
<h1 class="title">${title}</h1>
<div class="text">${text}</div>
`
    }
}

export default Contents;