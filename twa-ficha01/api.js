import { writeFile } from 'fs/promises';

const res = await fetch('https://api.github.com/repos/nodejs/node',

)

if (!res.ok) throw new Error(`HTTP${res.status}`)
const repo = await res.json()
console.log(repo.name, 
            repo.stargazers_count)


// escolher campo e converter para json

const sData = JSON.stringify({
    name: repo.name,
    stargazers_count: repo.stargazers_count
}, null, 2);

// guardar no repo.json

await writeFile('repo.json', sData);
console.log('repo.json successfully created');
