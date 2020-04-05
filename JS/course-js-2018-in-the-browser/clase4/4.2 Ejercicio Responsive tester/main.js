const form = document.getElementById('responsiveTesterForm');

if(responsiveTesterForm){
    form.addEventListener('submit', () => {
        let width = form.querySelector('#width');
        let height = form.querySelector('#height');
        let url = form.querySelector('#url');
        if(width && height && url){
            width = width.value;
            height = height.value;
            url = url.value;
        }
        // window.open(url,url, `width = ${width}, height = ${height}`)
        window.open(url,url, `innerWidth = ${width}, innerHeight = ${height}`)
    })
}