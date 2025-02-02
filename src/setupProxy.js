const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const targetUrl = process.env.REACT_APP_API_URL; // Используем переменную окружения

  if (!targetUrl) {
    console.error('Ошибка: REACT_APP_API_URL не определена в .env файле');
    return;
  }

  app.use(
    '/api', // Все запросы, начинающиеся с /api, будут перенаправлены
    createProxyMiddleware({
      target: targetUrl, // Целевой URL из переменной окружения
      changeOrigin: true,
      pathRewrite: { '^/api': '' } // Удаление префикса /api из запроса
    })
  );
};