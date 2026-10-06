import assert from 'node:assert/strict';
import { items } from './data.js';
import { byCategory, search, total, top, categories, withDiscount } from './catalog.js';


// nº de livros na lista
assert.equal(byCategory(items, 'book').length, 9);

// livros com nome javascript
assert.equal(search(items, 'javascript').length, 3);

// soma de todos os preços (382.65)
assert.equal(total(items), 382.65);

// livro mais caro da lista
assert.equal(top(items, 1)[0].price, 50);

// categorias
assert.deepEqual(categories(items), ['book', 'cars']);

// livro You Don't Know JS custa 25.5. Com 10% de desconto fica a 22.95
assert.equal(withDiscount(items, 10)[3].price, 22.95);