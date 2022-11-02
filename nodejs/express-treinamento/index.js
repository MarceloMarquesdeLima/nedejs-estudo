const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Bem vindos!")
});

app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }else{
        res.send("<h1>Bem vindo ao Blog!</h1>");        
    }
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum Canal fornecido!");
    }
});

app.get("/ola/:nome/:empresa", function(req, res){
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1>Olá " + nome + " - " + empresa +"</h1>");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciando com sucesso!");
    }
});