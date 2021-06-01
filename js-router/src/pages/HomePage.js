import Contents from "../components/Contents";

class HomePage {
    $main;
    state = {
        title: 'Home Page',
        text :'This is Home Page',
    };

    constructor($main) {
        this.$main = $main;
        const content = new Contents(this.$main, this.state);
    }
}

export default HomePage