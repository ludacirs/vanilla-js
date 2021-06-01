import Header from "./components/Header";
import Main from "./components/Main";

class App {
    constructor($target) {
        this.$target=$target;

        const header = new Header(this.$target);
        const main = new Main(this.$target);
    }
}

export default App
