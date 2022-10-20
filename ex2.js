import fs from 'fs';

const dir = "./upload";
const file = 'lakers.txt';
const path = `${dir}/${file}`;


if(!fs.existsSync(dir)){
    fs.mkdir(dir,(err)=>{
        //se der erro ele volta para o processo
        if(err) throw err;
        //se passar do trow ele executa o cod abaixo
        console.log(`Diretório ${dir} criado com sucesso`);
    })
}else{
    console.log(`?Acessando o diretório: ${dir}`);
}

let msg = 'O segundo melhor time de basquete é o Los Angels Lakers'

if(!fs.existsSync(path)){
    fs.writeFile(path, msg, (err)=>{
        if(err) throw err;
        console.log(`Arquivo ${file} criado com sucesso`);
    })
}