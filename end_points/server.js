const http = require("http");

const students = [
    { id: 1, name: "nidup", age: 20 },
    { id: 2, name: "BOB", age: 22 },
    { id: 3, name: "norbu", age: 19 }
];

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Student API");
    } else if (req.method === "GET" && req.url === "/students") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    } else if (req.method === "GET" && req.url.startsWith("/students/")) {
        // Extract student ID from URL
        const id = parseInt(req.url.split("/")[2], 10);
        const student = students.find(s => s.id === id);

        if (student) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Student not found");
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
