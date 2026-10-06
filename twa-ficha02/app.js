import { items } from './data.js'
import { byCategory, search, top } from './catalog.js'

const [cmd, arg] = process.argv.slice(2)



if (!cmd) {
    // node app.js: lista tudo
    console.log(items);
} else if (cmd === 'search') {
    // node app.js search clean: pesquisa pelo nome
    console.log(search(items, arg));
} else if (cmd === 'top') {
    // node app.js top 4: os 4 mais caros
    console.log(top(items, Number(arg)));
} else {
    // node app.js book: pesquisa uma categoria 
    console.log(byCategory(items, cmd));
}