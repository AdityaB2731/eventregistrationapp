// # Online Event Registration System — MERN Stack

// A full-stack MERN application for registering users for tech events. Registrations are stored in a cloud-hosted MongoDB Atlas database.

// ## 🏗️ Tech Stack

// | Layer     | Technology                  |
// | --------- | --------------------------- |
// | Frontend  | React + Vite                |
// | Backend   | Node.js + Express           |
// | Database  | MongoDB Atlas (Cloud)       |
// | Styling   | Vanilla CSS (Dark Theme)    |
// | Deploy    | AWS EC2                     |

// ## 📁 Project Structure

// ```
// event-registration/
// ├── backend/
// │   ├── config/db.js           # MongoDB connection
// │   ├── models/Registration.js # Mongoose schema
// │   ├── routes/registrations.js# CRUD API routes
// │   ├── server.js              # Express entry point
// │   ├── .env                   # Backend environment variables
// │   ├── .env.example           # Backend env template
// │   └── package.json
// ├── frontend/
// │   ├── src/
// │   │   ├── components/        # Navbar, Footer
// │   │   ├── pages/             # HomePage, RegisterPage, AdminPage
// │   │   ├── App.jsx            # Router setup
// │   │   ├── main.jsx           # Entry point
// │   │   └── index.css          # Design system
// │   ├── .env                   # Frontend environment variables
// │   ├── .env.example           # Frontend env template
// │   └── package.json
// ├── .gitignore
// └── README.md
// ```

// ---

// ## 🔑 Environment Variables Reference

// ### Backend `.env`

// Create a `.env` file inside the `backend/` directory:

// ```env
// # ---- backend/.env ----

// # Port on which the Express server will run
// PORT=5000

// # MongoDB Atlas connection string
// # Replace <username>, <password>, and cluster URL with your own
// MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority

// # Set to "development" locally, "production" on EC2
// # When "production", the backend serves the React build as static files
// NODE_ENV=development
// ```

// | Variable    | Description                                    | Example                                      |
// | ----------- | ---------------------------------------------- | -------------------------------------------- |
// | `PORT`      | Server port                                    | `5000`                                       |
// | `MONGO_URI` | MongoDB Atlas connection string                | `mongodb+srv://user:pass@cluster0.xxx.mongodb.net/event-registration` |
// | `NODE_ENV`  | `development` (local) or `production` (EC2)    | `production`                                 |

// ### Frontend `.env`

// Create a `.env` file inside the `frontend/` directory:

// ```env
// # ---- frontend/.env ----

// # Backend API base URL
// # Local development → http://localhost:5000
// # EC2 production    → http://<YOUR_EC2_PUBLIC_IP>:5000
// VITE_API_URL=http://localhost:5000
// ```

// | Variable       | Description                          | Local Value                | EC2 Value                              |
// | -------------- | ------------------------------------ | -------------------------- | -------------------------------------- |
// | `VITE_API_URL` | Base URL the frontend uses for API calls | `http://localhost:5000` | `http://<YOUR_EC2_PUBLIC_IP>:5000`     |

// > **⚠️ Important:** Vite environment variables must be prefixed with `VITE_` to be exposed to the frontend code. After changing `.env`, you must **rebuild** the frontend (`npm run build`) for changes to take effect in production.

// ---

// ## 🚀 Local Development

// ### 1. Setup MongoDB Atlas

// 1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
// 2. Create a free cluster
// 3. Create a database user (note down the username & password)
// 4. Go to **Network Access** → Add IP → Whitelist your IP (or `0.0.0.0/0` for development)
// 5. Go to **Database** → **Connect** → **Drivers** → Copy the connection string

// ### 2. Configure & Start Backend

// ```bash
// cd event-registration/backend
// ```

// Create the `.env` file:
// ```env
// PORT=5000
// MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority
// NODE_ENV=development
// ```

// Install dependencies and start:
// ```bash
// npm install
// npm run dev
// ```

// Backend will start on `http://localhost:5000`

// ### 3. Configure & Start Frontend

// ```bash
// cd event-registration/frontend
// ```

// Create the `.env` file:
// ```env
// VITE_API_URL=http://localhost:5000
// ```

// Install dependencies and start:
// ```bash
// npm install
// npm run dev
// ```

// Frontend will start on `http://localhost:5173`

// ---

// ## ☁️ AWS EC2 Deployment Guide

// ### Step 1: Launch EC2 Instance

// - **AMI:** Ubuntu 22.04 LTS
// - **Instance type:** t2.micro (free tier eligible)
// - **Security Group Inbound Rules:**

// | Type       | Port | Source    | Purpose         |
// | ---------- | ---- | --------- | --------------- |
// | SSH        | 22   | My IP     | SSH access      |
// | Custom TCP | 5000 | 0.0.0.0/0 | Application     |

// - Create and download your `.pem` key pair

// ### Step 2: Connect to EC2

// ```bash
// chmod 400 your-key.pem
// ssh -i your-key.pem ubuntu@<YOUR_EC2_PUBLIC_IP>
// ```

// ### Step 3: Install Dependencies on EC2

// ```bash
// # Update system packages
// sudo apt update && sudo apt upgrade -y

// # Install Node.js 20.x
// curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
// sudo apt install -y nodejs

// # Verify installation
// node -v    # Should show v20.x.x
// npm -v     # Should show 10.x.x

// # Install Git
// sudo apt install -y git

// # Install PM2 process manager globally
// sudo npm install -g pm2
// ```

// ### Step 4: Clone the Project

// ```bash
// cd ~
// git clone <YOUR_GITHUB_REPO_URL> event-registration
// cd event-registration
// ```

// ### Step 5: Configure Backend `.env` on EC2

// ```bash
// cd backend
// npm install

// # Create the backend .env file
// nano .env
// ```

// Paste the following (replace with your actual MongoDB credentials):

// ```env
// PORT=5000
// MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority
// NODE_ENV=production
// ```

// Save and exit: `Ctrl+X` → `Y` → `Enter`

// ### Step 6: Configure Frontend `.env` & Build on EC2

// ```bash
// cd ../frontend
// npm install

// # Create the frontend .env file
// nano .env
// ```

// Paste the following (replace `<YOUR_EC2_PUBLIC_IP>` with your actual EC2 IP):

// ```env
// VITE_API_URL=http://<YOUR_EC2_PUBLIC_IP>:5000
// ```

// Save and exit: `Ctrl+X` → `Y` → `Enter`

// Now build the production bundle:

// ```bash
// npm run build
// ```

// > This creates a `dist/` folder. The backend will serve these files when `NODE_ENV=production`.

// ### Step 7: Start the Application with PM2

// ```bash
// cd ../backend
// pm2 start server.js --name event-registration
// pm2 save
// pm2 startup    # Follow the printed command to enable auto-start on reboot
// ```

// ### Step 8: Access the Application

// Open your browser and visit:

// ```
// http://<YOUR_EC2_PUBLIC_IP>:5000
// ```

// The Express backend serves both the API and the React frontend in production mode.

// ---

// ## 🔒 MongoDB Atlas — Whitelist EC2 IP

// In MongoDB Atlas:
// 1. Go to **Network Access**
// 2. Click **Add IP Address**
// 3. Add your EC2 instance's public IP, or `0.0.0.0/0` (allow from anywhere) for testing

// ---

// ## 📡 API Endpoints

// | Method | Endpoint                   | Description              |
// | ------ | -------------------------- | ------------------------ |
// | GET    | `/api/registrations`       | Get all registrations    |
// | GET    | `/api/registrations/stats` | Get registration stats   |
// | GET    | `/api/registrations/:id`   | Get single registration  |
// | POST   | `/api/registrations`       | Create new registration  |
// | DELETE | `/api/registrations/:id`   | Delete a registration    |
// | GET    | `/api/health`              | Health check             |

// ### POST `/api/registrations` — Request Body

// ```json
// {
//   "fullName": "John Doe",
//   "email": "john@example.com",
//   "phone": "9876543210",
//   "event": "Tech Conference 2026",
//   "organization": "ACME Corp",
//   "dietaryPreference": "vegetarian",
//   "additionalNotes": "Need wheelchair access"
// }
// ```

// ---

// ## 🛠️ Useful PM2 Commands (On EC2)

// ```bash
// pm2 status                     # Check if app is running
// pm2 logs event-registration    # View live logs
// pm2 restart event-registration # Restart the app
// pm2 stop event-registration    # Stop the app
// pm2 delete event-registration  # Remove from PM2
// ```

// ---


// location /api/ {
//     proxy_pass http://127.0.0.1:5000/;
//     proxy_http_version 1.1;
//     proxy_set_header Upgrade $http_upgrade;
//     proxy_set_header Connection 'upgrade';
//     proxy_set_header Host $host;
//     proxy_cache_bypass $http_upgrade;
// }

// 🚀 FULL NGINX SETUP (MERN + /api routing)

// We assume:

// Backend running on PM2 → port 5000
// Frontend built using Vite → dist/
// API prefix = /api
// ✅ STEP 1: Install / verify NGINX
// sudo apt update
// sudo apt install nginx -y

// Check:

// sudo systemctl status nginx
// ✅ STEP 2: Build frontend (you already did but for reference)
// cd frontend
// npm install
// npm run build

// This creates:

// frontend/dist
// ✅ STEP 3: Copy frontend to NGINX folder
// sudo rm -rf /var/www/html/*
// sudo cp -r dist/ /var/www/html/



// ✅ STEP 4: Open NGINX config
// sudo nano /etc/nginx/sites-available/default
// ✅ STEP 5: REPLACE ENTIRE SERVER BLOCK with this

// 👉 This is your COMPLETE correct setup:

// server {
//     listen 80;
//     server_name _;

//     root /var/www/html/dist;

//     # FRONTEND (React/Vite SPA routing fix)
//     location / {
//         try_files $uri $uri/ index.html;
//     }

//     # BACKEND API ROUTING
//     location /api/ {
//         proxy_pass http://127.0.0.1:5000/;
//         proxy_http_version 1.1;

//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }
// 🧠 IMPORTANT NOTES
// 1. try_files ... /index.html

// This fixes:

// React routing (SPA refresh issue)
// prevents 404 on page reload
// 2. /api/ proxy_pass MUST have trailing slash
// proxy_pass http://127.0.0.1:5000/;

// ✔ This removes /api prefix correctly

// ✅ STEP 6: Test NGINX config
// sudo nginx -t

// You should see:

// syntax is ok
// test is successful
// ✅ STEP 7: Restart NGINX
// sudo systemctl restart nginx

// note in root no need /dist if in case something fails
// and in =404 replace with /index.html if index.html does not work