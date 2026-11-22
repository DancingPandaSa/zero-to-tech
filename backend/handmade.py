from http.server import BaseHTTPRequestHandler, HTTPServer
import json
profile = {
    "heroTitle": "About me",
    "heroSubtitle": "I am a software engineer with a passion for building web applications and exploring new technologies. I have experience in both frontend and backend development, and I enjoy working on projects that challenge me to learn and grow as a developer."
}
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.headers)
        print(self.client_address)
        if self.path == '/api/profile':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(profile).encode())
        elif self.path == "/hello":
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"<html><body><h1>Hello, World!</h1></body></html>")

        else:
            self.send_response(404)
            self.end_headers()
print("Starting server on port 8000...")
HTTPServer(('', 8000), RequestHandler).serve_forever()
