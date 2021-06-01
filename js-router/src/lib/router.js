import Contents from "../components/Contents";


class Router {
    $target;
    routes;
    constructor($target,routes) {
        this.$target = $target;

        this.generateRouters(routes);
        this.setEvent();
    }

    generateRouters(routes) {
        this.routes = {};
        routes.forEach(route =>{
            this.routes[route.path] = route;
        });
    }

    setEvent(){
        window.addEventListener('hashchange',()=>this.handleHashChange());
    }

    getRoute(path) {
        const route = this.routes[path];
        if(!route) throw new Error('unknown path');
        if(route.redirect) {
            this.push(route.redirect);
        }
        return route;
    }
    getComponent(route){
        return route.component;
    }
    handleHashChange(){
        this.$target.innerHTML = '';

        const path = location.hash.slice(1);

        try {
            const route = this.getRoute(path);
            const component = this.getComponent(route);

            new component(this.$target);
        } catch (e){
            console.log(e);
            new Contents(this.$target,{
                title: '에러가 발생했습니다',
                text: '로그를 확인해주세요'
            });
        }
    }
    push(path){
        location.hash = path;
    }
}


export let $router;

export function initRouter($main, routes){
    const router = new Router($main, routes);
    $router = {
        push(path){
            router.push(path);
        }
    }
    router.handleHashChange();
}

