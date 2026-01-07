// config.js - Configuração centralizada da API
// ATENÇÃO: arquivo modificado temporariamente para apontar o front
// diretamente ao backend no Render. Remova/ajuste após confirmar.
const API_CONFIG = {
    getApiUrl: () => {
        // Forçar uso do backend no Render para evitar chamadas locais/serverless
        return 'https://sistema-pedidos-personalizacao-almeida.onrender.com/api';
    }
};

if (typeof window !== 'undefined') {
    window.API_CONFIG = API_CONFIG;
}