export default function handler(req, res) {
  // 这里是 Node.js 环境
  console.log("[nku]log >> :2 >> handler >> res:", res);
  console.log("[nku]log >> :2 >> handler >> req:", req);
  res.status(200).json({ text: 'Hello' });
}
/**
 * note
 * API Route 是后端，不是页面、它只在服务器运行、它是浏览器和数据库之间的中间人

 * Next.js 的 API 路由 = 写在前端项目里的“后端接口”
 * 
 * 这个文件不是页面，访问它：http://localhost:3000/api/hello 返回的不是 HTML，而是 数据。
 * 
 * 你在页面里做一个表单，让它发一个 POST 请求。

 * fetch('/api/submit', {
 *   method: 'POST',
 *   body: JSON.stringify({ name: 'Tom' })
 * })

 * 这个请求不是发给页面，而是发给 API Route：/pages/api/submit.js
 *  */
