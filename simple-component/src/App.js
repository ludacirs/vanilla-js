import Items from "./components/Items.js";
import ItemInput from "./components/ItemInput.js";
import ItemFilters from "./components/ItemFilters.js";
import Component from "./lib/Component.js";

class App extends Component{
    state = {
        filterBy: 'all',
        items: [
            {
                text: 'item1',
                index: 1,
                active: 0
            },
            {
                text: 'item2',
                    index: 2,
                    active: 0
                },
            ]
        };
        index = 3

    constructor() {
        super(...arguments)
        const $target = document.querySelector('#app')
        this.itemInput = new ItemInput($target, {
            addItem : this.addItem
        })
        this.itemFilters = new ItemFilters($target,{
            filterChange : this.filterItem
        })
        this.items = new Items($target, {
            items : this.state.items,
            filterBy : this.state.filterBy,
            removeItem : this.removeItem,
            toggleItem : this.toggleItem,
        })
    }



    //this를 이용하기 위해서 애로우 펑션 사용
    addItem = (value) =>{
        const items = [...this.state.items]
        const newItem = {text: `${value ? value : 'item'+this.index}`, index : this.index, active: 0}

        this.setState('items', {items: [...items, newItem]})

        this.index++
    }
    toggleItem = (targetIndex) =>{
        const items = [...this.state.items]
        this.setState('items', {
            items: items.map(item => item.index !== targetIndex ?
                item :
                {...item, active: item.active ? 0 : 1})
        })
    }

    removeItem = (targetIndex) =>{
        const items = [...this.state.items]
        this.setState('items', {items: items.filter(item => item.index !== targetIndex)})
    }
    filterItem = (stand)=>{
        this.setState('items', {filterBy: stand})
    }

    // App컴포넌트 전체가 렌더링되는게 싫어서 변하는 부분만 다시 렌더링 시켜주기
    setState(component,nextState){
        this.state = {...this.state,...nextState}
        this[component].setState(this.state)
    }
}

export default App