/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		loader: "akamai",
		path: "",
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
			type: "asset/resource",
			generator: {
				filename: "static/chunks/[path][name].[hash][ext]",
			},
		});

		return config;
	},
};

module.exports = nextConfig;
