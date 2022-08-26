export default async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  url.pathname = '/destination.html';
  return Response.redirect(url, 302);
}