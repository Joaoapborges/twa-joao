import { items } from './data.js';
import { writeFile } from 'node:fs/promises';
import { byCategory, search, top,total, categories } from './catalog.js';

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
} else if (cmd === 'report') {
    
    const relatorio = {
        count: items.length, // total de itens na lista
        total: total(items), // soma dos preços
        categories: categories(items), // lista de categorias únicas
        top3: top(items, 3) // os 3 itens mais caros
    };

    const conteudoJson = JSON.stringify(relatorio, null, 2);

    await writeFile('report.json', conteudoJson);

    console.log('Ficheiro report.json criado com sucesso');

}else {
    // node app.js book: pesquisa uma categoria 
    console.log(byCategory(items, cmd));
}