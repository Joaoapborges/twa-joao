import { items } from "./data.js";

// console.log(items);

function bycategory(list, cat){
    return list.filter(item => item.category === cat);
};

// console.log(bycategory(items,'book'));


function search(list, text) {
    const query = text.toLowerCase();
    return list.filter(item => 
        (item.name && item.name.toLowerCase().includes(query)) || 
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
    );
}

// console.log(search(items, 'javascript'));

function total(list) {
    return list.reduce((soma, item) => soma + item.price, 0);
}

// console.log(total(items));


function top(list, n) {
    // [...list] cria um novo array para não alterar o original com o .sort()
    return [...list]
        .sort((a, b) => b.price - a.price)
        .slice(0, n);
}


// console.log(top(items, 4));

function categories(list) {
    //  Set remove os duplicados e sort ordena alfabeticamente
    const categoriasUnicas = [...new Set(list.map(item => item.category))];
    return categoriasUnicas.sort();
}


// console.log(categories(items));


function withDiscount(list, pct) {
    return list.map(item => ({
        ...item,
        price: item.price * (1 - pct / 100)
    }));
}

//console.log(withDiscount(items, 15));