class Component {
    $target;
    $elem;
    state;
    constructor($target, state = null) {
        this.$target = $target;
        this.$elem = document.createElement('div');
        this.state = state;
        this.setup();
        this.setEvent();
        this.render();
    }

    setup(){
        this.$elem.classList.add(this.constructor.name);
    }
    setEvent(){}
    addEvent(eventType, selector, callback){
        function isTarget(target) {
            return target.closest(selector);
        }
        this.$target.addEventListener(eventType,(e)=>{
            if(!isTarget(e.target)) return ;
            callback(e);
        })
    }




    template(){
        return ``;
    }
    render(){
        this.$elem.innerHTML = this.template();
        this.$target.appendChild(this.$elem);
        console.group();
        console.log(this.$elem);
        console.log('is appended to');
        console.log(this.$target);
        console.groupEnd();
    }

}
export default Component;