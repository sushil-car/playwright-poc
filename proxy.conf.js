const apiHost = process.env.npm_config_apihost || 'localhost';

module.exports = [
  {
    context: (path, req) => {
      console.log('=== Proxy Request ===');
      return path.includes('/api') || path.includes('/scripts');
    },
    target: `http://test:8008`,
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
];
