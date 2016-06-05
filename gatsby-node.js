exports.modifyWebpackConfig = function(config, env) {
  // edit loaders here
  // config.removeLoader('css')
  // config.removeLoader('jpeg')
  config.removeLoader('jpg')
  config.removeLoader('gif')
  config.removeLoader('png')
  // config.removeLoader('svg')
  config.loader('jpg', function(cfg) {
    cfg.test= /\.(jpe?g|png|gif)$/i,
    cfg.loader = 'file?hash=sha512&digest=hex&name=[hash].[ext]'
    // [
    //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
    //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    // ]
    return cfg
  })

  return config
}
