import { items } from "./data.js";

// console.log(items);
/*
function bycategory(list, cat){
    return list.filter(item => item.category === cat);
};
*/

// com destructuring:

export function byCategory(list, cat) {
    return list.filter(({ category }) => category === cat);
}

// console.log(bycategory(items,'book'));


export function search(list, text) {
    const query = text.toLowerCase();
    return list.filter(item => 
        (item.name && item.name.toLowerCase().includes(query)) || 
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
    );
}

// console.log(search(items, 'javascript'));

export function total(list) {
    return list.reduce((soma, item) => soma + item.price, 0);
}

// console.log(total(items));


export function top(list, n) {
    return list
        .toSorted(({ price: priceA }, { price: priceB }) => priceB - priceA)
        .slice(0, n);
}


// console.log(top(items, 4));

export function categories(list) {
    //  Set remove os duplicados e sort ordena alfabeticamente
    const categoriasUnicas = [...new Set(list.map(item => item.category))];
    return categoriasUnicas.sort();
}


// console.log(categories(items));


export function withDiscount(list, pct) {
    return list.map(item => ({
        ...item,
        price: item.price * (1 - pct / 100)
    }));
}

//console.log(withDiscount(items, 15));