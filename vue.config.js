module.exports = {
  pwa: {
    name: 'Indo Lottery',
    themeColor: '#1a1a4e',
    msTileColor: '#1a1a4e',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#f8f9fa",
      display: "standalone",
      start_url: "/",
      description: "Official Bhutan Lottery Application",
      icons: [
        {
          src: "./img/icons/192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://indolottery.bt/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache'
          }
        }
      ]
    }
  }
}
