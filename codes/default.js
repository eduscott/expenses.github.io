//pages switch
function replacePage (page) {
    url = '../pages/' + page + '.html'
    window.location.replace(url);
}

function assignPage (page) {
    url = '../pages/' + page + '.html'
    window.location.assign(page);
}
