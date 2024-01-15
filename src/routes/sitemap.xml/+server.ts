export const prerender = true


import * as fs from 'fs';
const deployDate = fs.readFileSync('./DEPLOY_DATE', { encoding: 'utf8', flag: 'r' })


export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<!-- <url> elements go here -->
			<url>
				<loc>https://accoma.de</loc>
				<lastmod>${deployDate.trim()}</lastmod>
			</url>
			<url>
				<loc>https://accoma.de/tos</loc>
				<lastmod>${deployDate.trim()}</lastmod>
			</url>
			<url>
				<loc>https://accoma.de/imprint</loc>
				<lastmod>${deployDate.trim()}</lastmod>
			</url>
			<url>
				<loc>https://accoma.de/accomodations</loc>
				<lastmod>${deployDate.trim()}</lastmod>
			</url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}