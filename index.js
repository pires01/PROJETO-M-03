
const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


// CRUD --> Create, Read, Update, Delete

// Retorna um serviço
server.get('/tatuagens/:index', (req, res) => {
    const { index } = req.params

    return res.json(data.tatuagens[index])
});

// Retornar todos os serviços
server.get('/tatuagens', (req, res) => {

    return res.json(data.tatuagens)
});

// Criar um novo serviço
server.post('/tatuagens', (req, res) => {
    const { name } = req.body;
    data.tatuagens.push(name);

    return res.json(data.tatuagens);
});

// Atualizar um serviço
server.put('/tatuagens/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    data.servicos[index] = name;

    return res.json(data.tatuagens);
});

// Deletar um item
server.delete('/tatuagens/:index', (req, res) => {
    const { index } = req.params;

    data.splice(index, 1);
    return res.json({ message: "O item foi deletado" });
})


server.delete("/tatuagens/:index", (req, res) => {
    const item = item.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Item não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});