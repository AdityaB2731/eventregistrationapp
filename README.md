# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs
## 🔑 Environment Variables Reference

### Backend `.env`

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority
NODE_ENV=development

MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.90ywxcn.mongodb.net
//or
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.90ywxcn.mongodb.net/blogdb?retryWrites=true&w=majority
### Frontend `.env`

Create a `.env` file inside the `frontend/` directory:

```env

# Backend API base URL
# Local development → http://localhost:5000
# EC2 production    → http://<YOUR_EC2_PUBLIC_IP>:5000
VITE_API_URL=http://localhost:5000
```

> **⚠️ Important:** Vite environment variables must be prefixed with `VITE_` to be exposed to the frontend code. After changing `.env`, you must **rebuild** the frontend (`npm run build`) for changes to take effect in production.


```

Create the `.env` file:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority
NODE_ENV=development


Backend will start on `http://localhost:5000`


Create the `.env` file frontend:
```env
VITE_API_URL=http://localhost:5000
```

Frontend will start on `http://localhost:5173`

---


