import Component from "../lib/Component.js";

class ItemInput extends Component{
    setEvent() {
        this.addEvent('click','.add',(e)=>{
            e.preventDefault()
            const inputElem = this.$target.querySelector('.add-input')
            const value = inputElem.value
            this.state.addItem(value)
            inputElem.value = ''
            inputElem.focus()
        })
    }

    template(){
        return `
    <form >
        <input type="text" class="add-input" placeholder="내용을 입력하세요" autofocus>
        <button class="add">추가</button>
    </form>`
    }
}

export default ItemInput