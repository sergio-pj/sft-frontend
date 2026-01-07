// Configuração simples de admin para uso offline/local
window.ADMIN_CONFIG = {
  admin: {
    _id: 'admin-local',
    nome: 'Sérgio Paulo',
    email: 'sergiopaulo0310@gmail.com',
    nomeLoja: 'Personalização Almeida',
    telefone: '(11) 99999-0000'
  },
  // Senha em texto simples (edite aqui para alterar)
  password: '123456',

  // Exemplos de dados que serão colocados no localStorage após login
  samplePedidos: [
    {
      id: 'p-1',
      adminId: 'admin-local',
      nomeCliente: 'João Silva',
      contato: '(11) 99999-0000',
      numeroPedido: '001',
      formaPagamento: 'Dinheiro',
      dataEntrega: '2026-01-10T00:00:00.000Z',
      itens: [{ nome: 'Camiseta', qtd: 2, precoUn: 30, totalLinha: 60 }],
      detalhesTamanho: 'M',
      valorSinal: 20,
      valorTotal: 60,
      status: 'A Fazer',
      pendenteSincronizacao: false,
      syncError: null,
      createdAt: '2026-01-07T00:00:00.000Z'
    }
  ],

  sampleClientes: [
    {
      id: 'c-1',
      adminId: 'admin-local',
      nomeCliente: 'João Silva',
      contato: '(11) 99999-0000',
      endereco: 'Rua Exemplo, 123',
      createdAt: '2026-01-07T00:00:00.000Z'
    }
  ]
};
