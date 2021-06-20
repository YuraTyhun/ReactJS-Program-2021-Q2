module.exports = () => {
  return process.env.NODE_ENV === 'development'
  ? require('./webpack.dev')
  : require('./webpack.prod');
}