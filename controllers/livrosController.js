let livros = []; 

// Criar um livro
exports.criarLivro = (req, res) => {
    const { titulo, autor } = req.body;
    
    if (typeof titulo !== 'string' || titulo.trim() === '' || typeof autor !== 'string' || autor.trim() === '') {
        return res.status(400).json({ mensagem: 'Título e autor devem ser strings não vazias' });
    }
    
    const id = livros.length + 1;
    const novoLivro = { id, titulo, autor };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
};

// Lista os livros
exports.listarLivros = (req, res) => {
    res.json(livros);
};

// Busca um livro pelo ID
exports.buscarLivroPorId = (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });
    res.json(livro);
};

// Atualiza um livro
exports.atualizarLivro = (req, res) => {
    const livro = livros.find(l => l.id == req.params.id);
    if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });

    const { titulo, autor } = req.body;
    
    if (titulo && (typeof titulo !== 'string' || titulo.trim() === '')) {
        return res.status(400).json({ mensagem: 'Título deve ser uma string não vazia' });
    }
    if (autor && (typeof autor !== 'string' || autor.trim() === '')) {
        return res.status(400).json({ mensagem: 'Autor deve ser uma string não vazia' });
    }
    
    livro.titulo = titulo || livro.titulo;
    livro.autor = autor || livro.autor;
    res.json(livro);
};

// Exclui um livro
exports.excluirLivro = (req, res) => {
    livros = livros.filter(l => l.id != req.params.id);
    res.json({ mensagem: 'Livro removido com sucesso' });
};
