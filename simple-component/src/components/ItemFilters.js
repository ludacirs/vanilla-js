import Component from "../lib/Component.js";

class ItemFilters extends Component{

    setEvent() {
        this.addEvent('click', '.active',({target})=>{
            this.state.filterChange(target.dataset.stand)
        })
    }

    template(){
        return `
        <button class="active" data-stand="all">전체 아이템 보기</button>
        <button class="active" data-stand="1">완료된 아이템 보기</button>
        <button class="active" data-stand="0">미완료 아이템 보기</button>
`
    }
}

export default ItemFilters