import Contents from "../components/Contents";

class AboutPage {
    $main;
    state = {
        title: 'About Page',
        text :'This is About Page',
    };

    constructor($main) {
        this.$main = $main;
        const content = new Contents(this.$main, this.state);
    }
}

export default AboutPage