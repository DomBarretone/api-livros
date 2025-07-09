const Livro = require('../models/livro');

// GET all livros
exports.getAllLivros = async (req, res) => {
  const livros = await Livro.findAll();
  res.json(livros);
};

// GET livro by ID
exports.getLivro = async (req, res) => {
  const { id } = req.params;
  const livro = await Livro.findByPk(id);
  if (livro) res.json(livro);
  else res.status(404).json({ message: 'Livro não encontrado' });
};

// POST novo livro
exports.createLivro = async (req, res) => {
  const { titulo, autor, anoPublicacao } = req.body;
  const novoLivro = await Livro.create({ titulo, autor, anoPublicacao });
  res.status(201).json(novoLivro);
};

// PUT atualizar livro
exports.updateLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, anoPublicacao } = req.body;
  const livro = await Livro.findByPk(id);
  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });

  await livro.update({ titulo, autor, anoPublicacao });
  res.json(livro);
};

// DELETE livro
exports.deleteLivro = async (req, res) => {
  const { id } = req.params;
  const livro = await Livro.findByPk(id);
  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });

  await livro.destroy();
  res.json({ message: 'Livro excluído' });
};
