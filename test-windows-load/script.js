const loadHtml = (url, app) => {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((body) => {
            app.innerHTML = body;
            const arr = app.getElementsByTagName("script");
            for (var n = 0; n < arr.length; n++) eval(arr[n].innerHTML);
        });
};

const AddComponente = document.getElementById('AddComponente')

var routes = [
    // changement de page
    {path: "#/notfound", name: "notfound", component: "page404.html"},
    {path: "#/page-1", name: "page-1", component: "page1.html"},
    {path: "#/page-2", name: "page-2", component: "page2.html"},
];

let viewsFolder = "./views/";
// let btn_retour = "";

const HashChange = async () => {
    let hash = window.location.hash;
    let hashRoutes;
    let hashComponent;

    if (hash.startsWith("#/") && hash.length>2){
        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"];
            }
        }
        if (hashRoutes) {
            loadHtml( viewsFolder+hashComponent, AddComponente );
        }else{
            window.location = "#/notfound";
            // btn_retour = viewsFolder+hashComponent;
        }

    }else if(hash.startsWith("#") && hash.length>2){
        for (let ind = 0; ind < routes.length; ind++) {
            const route = routes[ind];
            if (window.location.hash == route["path"]) {
                hashRoutes = route["name"];
                hashComponent = route["component"]
            }
        }
        if (hashRoutes) {
            loadHtml( viewsFolder +hashRoutes );
            window.location = hashRoutes;
        }else{
            window.location = "#/notfound";
            // btn_retour = viewsFolder+hashRoutes;
        }
    }
}

// document.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     if (e.target.matches('.retour')) {
//         // console.log(btn_retour);
//         // loadHtml( btn_retour, AddComponente );
//         console.log(window.history);
//     }
// })

window.onhashchange = HashChange
HashChange();