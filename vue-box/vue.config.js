module.exports = {
  publicPath: './',
  lintOnSave: false,
  css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/color.scss";`
			}
		}
	},
}
