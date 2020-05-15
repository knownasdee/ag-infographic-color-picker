module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AgInfographicColorPicker',
      externals: {
        react: 'React'
      }
    }
  }
}
