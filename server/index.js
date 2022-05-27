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

app.listen(3001, () => {
    console.log("Server Listening !");
});