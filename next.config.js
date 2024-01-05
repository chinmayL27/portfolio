/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,

	images: {
		loader: "custom",
		path: "/_next/image",
	},

	assetPrefix: ".",

	exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			"/": { page: "/" },
		};
	},

	webpack: (config, options) => {
		config.module.rules.push({
			test: /.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2)$/i,
			issuer: {
				and: [/\.(js|ts)x?$/],
			},
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: "/_next/static/images",
						outputPath: "static/images/",
						name: "[name]-[hash].[ext]",
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
