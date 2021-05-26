import Component from "../lib/Component.js";


class Items extends Component{
    // Component의 constructor가 실행되면서 this.$target = $target 으로
    // this.setup() 으로 this.state 는 Items의 setup으로
    // 결론 : costructor super()는 호출할 필요가 없다
    // constructor() {
    //     super(...arguments);
    // }

    setup() {
        super.setup()

    }

    setEvent() {
        this.addEvent('click','.remove',({target})=>{
            this.state.removeItem(target.closest('[data-index]').dataset.index*1)
        })
        this.addEvent('click','.toggle',({target})=>{
            this.state.toggleItem(target.closest('[data-index]').dataset.index*1)
        })
    }
    get filteredItems (){
        const {filterBy, items} = this.state
        return filterBy==='all' ? items : items.filter(({active})=>active===filterBy*1)
    }

    template() {
        return `
        <ul>
            ${this.filteredItems.map(({text, active,index})=>
                `
                <li data-index="${index}" >${text}
                    <button class="toggle" data-active="false" style="color: ${active ? '#09F' : '#F09'}">${active? '완료':'미완료'}</button>
                    <button class="remove">삭제</button>
                </li> 
                `).join("")}
         </ul>
         `
    }
}


export default Items

