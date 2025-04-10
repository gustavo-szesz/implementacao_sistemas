const express = require('express');
const app = express();
const port = 3000;

// Dados dos produtos (carros)
const products = [
  {
    id: 1,
    name: "Model S",
    price: 89990,
    company: "Tesla",
    description: "Sedan elétrico de luxo com autonomia de 650 km e aceleração de 0-100 km/h em 3.2 segundos."
  },
  {
    id: 2,
    name: "F-150",
    price: 52000,
    company: "Ford",
    description: "Picape robusta com capacidade de reboque de 6 toneladas e motor EcoBoost de alto desempenho."
  },
  {
    id: 3,
    name: "Civic",
    price: 25000,
    company: "Honda",
    description: "Sedan compacto confiável com excelente economia de combustível e recursos de segurança avançados."
  },
  {
    id: 4,
    name: "911",
    price: 99950,
    company: "Porsche",
    description: "Esportivo icônico com motor boxer de 6 cilindros e desempenho excepcional em pista."
  }
];

// Rota GET para /products
app.get('/products', (req, res) => {
  res.json(products);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});