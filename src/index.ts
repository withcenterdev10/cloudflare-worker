/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// MODULE WORKER
export default {
	// If you want to set the CORS to GET
	// async fetch(request: Request): Promise<Response> {
	// 	if (request.method !== 'GET') {
	// 		return new Response(JSON.stringify({ error: 'Method not allowed' }), {
	// 			status: 405,
	// 			headers: { 'Content-Type': 'application/json' },
	// 		});
	// 	}

		async fetch(): Promise<Response> {
		const headers = new Headers();
		headers.set("Access-Control-Allow-Origin", "*");
		headers.set('Content-Type', 'application/json');

		return new Response(JSON.stringify({ message: 'I am from WithCenter!', name: 'Hermo' }), {
			status: 200,
			headers,
		});
	},
};

// SERVICE WORKER
// addEventListener('fetch', event => {
// 	event.respondWith(handleRequest(event.request));
//   });
  
//   async function handleRequest(request: Request): Promise<Response> {
// 	const url = new URL(request.url);
// 	const name = url.searchParams.get('name') || 'World';
// 	return new Response(`Hello, ${name}!`, {
// 	  headers: { 'content-type': 'text/plain' },
// 	});
//   }
// Expected results: Hello World or value of name
