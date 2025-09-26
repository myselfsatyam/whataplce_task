

A modern, responsive web application for discovering and filtering unique event spaces. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring real-time search, filtering, and a beautiful UI.

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/myselfsatyam/whataplce_task.git
   cd whataplce_task
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t next-js-search-page .

# Run the container
docker run -d -p 3000:3000 --name search-app next-js-search-page

# Check if it's running
docker ps

# View logs
docker logs search-app
```

### Docker Commands

```bash
# Stop the container
docker stop search-app

# Remove the container
docker rm search-app

# Remove the image
docker rmi next-js-search-page
```


