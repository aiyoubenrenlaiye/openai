export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "https://chat-gpt-next-web-go8f-k38gnj877-aiyoubenrenlaiye.vercel.app/";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
