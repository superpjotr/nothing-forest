#!/usr/bin/env python
import sys

if sys.version_info[0] > 2:
    from http import server
    import socketserver
else:
    import SimpleHTTPServer as server
    import SocketServer as socketserver

PORT = 8888
Handler = server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)

def run():
    print("server running on port", PORT)
    httpd.serve_forever()

if __name__ == "__main__":
    run()
