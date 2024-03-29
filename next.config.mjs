/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@ant-design'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media-cdn.tripadvisor.com',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: '@svgr/webpack', options: { icon: true } }],
		});

		return config;
	},
};

export default nextConfig;
