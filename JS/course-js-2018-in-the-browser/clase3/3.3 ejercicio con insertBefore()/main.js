const post = document.getElementById('post');
const ad = document.createElement('div');
ad.id = 'IdAd';
ad.textContent = 'publicidad';

const getMiddleChild = element => {
    const childs = element.children;
    const l = childs.length;
    const i = Math.floor(l / 2);

    return childs[i]
};

const middleChild = getMiddleChild(post);
post.insertBefore(ad,middleChild);