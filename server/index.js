let sqlite3 = require('sqlite3').verbose();
let express = require('express');
let app = express();
let db = new sqlite3.Database('./dbEstoque.db');
let cors = require('cors');

app.use(cors());
app.use(express.json());

//READ - Estoque
app.get('/getEstoques', (req, res) => {
    db.serialize(() => {
        db.all("SELECT e.id, e.nomeEstoque, e.quantidade, p.nomeProduto FROM estoque AS e INNER JOIN produto AS p ON (e.idProduto = p.id)", function(err, row) {
            if(err) {
                return console.log('Nao foi possivel exibir os estoques...');
            }
            res.send(row);
        });
    });
});

//READ - Produto

app.get('/produtos/getProdutos', (req, res) => {
    db.serialize(() => {
        db.all("SELECT id, nomeProduto, preco, descricao FROM produto", function(err, row) {
            if(err) {
                return console.log('Nao foi possivel exibir os produtos...');
            }
            res.send(row);
        });
    });
});

//CREATE - Produto

app.post('/cadastrarProduto', (req, res) => {
    db.serialize(() => {
        db.run("INSERT INTO produto(nomeProduto, preco, descricao) VALUES(?, ?, ?)", [req.body.nome, req.body.preco, req.body.descricao], function(err) {
            if(err) {
                return console.log('Nao foi possivel cadastrar o produto...');
            }
        });
    });
});

//CREATE - Estoque

app.post('/cadastrarEstoque', (req, res) => {
    db.serialize(() => {
        db.run("INSERT INTO estoque(nomeEstoque, quantidade, idProduto) VALUES(?, ?, ?)", [req.body.nome, req.body.quantidade, req.body.produto], function(err) {
            if(err) {
                return console.log('Nao foi possivel cadastrar o estoque...');
            }
        });
    });
});

//UPDATE - Estoque

app.put('/editarEstoque/:id', (req, res) => {
    db.serialize(() => {
        db.run("UPDATE estoque SET nomeEstoque = ?, quantidade = ?, idProduto = ? WHERE id = ? ", [req.body.novoNome, req.body.novaQuantidade, req.body.novoProduto, req.params.id], function(err, row) {
            if(err) {
                return console.log("Nao foi possivel editar o estoque...");
            }
            res.send(row);
        });
    });
});

app.put('/debitarProduto/:id', (req, res) => {
    db.serialize(() => {
        db.run("UPDATE estoque SET quantidade = ? WHERE id = ?", [req.body.quantidadeAtualizada, req.params.id], function(err, row) {
            if(err) {
                return console.log("Nao foi possivel debitar um produto...");
            }
            res.send(row);
        });
    });
});

//UPDATE - Produto

app.put('/editarProduto/:id', (req, res) => {
    db.serialize(() => {
        db.run("UPDATE produto SET nomeProduto = ?, preco = ?, descricao = ? WHERE id = ? ", [req.body.novoNome, req.body.novoPreco, req.body.novaDescricao, req.params.id], function(err, row) {
            if(err) {
                return console.log("Nao foi possivel editar o produto...");
            }
            res.send(row);
        });
    });
});

//DELETE - Estoque

app.delete('/deletarEstoque/:id', (req, res) => {
    db.serialize(() => {
        db.run("DELETE FROM estoque WHERE id = ?", [req.params.id], function(err) {
            if(err) {
                return console.log("Nao foi possivel deletar o estoque...");
            }
        });
    });
});

//DELETE - Produto

app.delete('/deletarProduto/:id', (req, res) => {
    db.serialize(() => {
        db.run("DELETE FROM produto WHERE id = ?", [req.params.id], function(err) {
            if(err) {
                return console.log("Nao foi possivel deletar o estoque...");
            }
        });
    });
});

app.listen(3001, () => {
    console.log("Server Listening !");
});