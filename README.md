# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
## 🔑 Environment Variables Reference

### Backend `.env`


# Port on which the Express server will run
PORT=5000

# MongoDB Atlas connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority

| Variable    | Description                                    | Example                                      |
| ----------- | ---------------------------------------------- | -------------------------------------------- |
| `PORT`      | Server port                                    | `5000`                                       |
| `MONGO_URI` | MongoDB Atlas connection string                | `mongodb+srv://user:pass@cluster0.xxx.mongodb.net/event-registration` |
| `NODE_ENV`  | `development` (local) or `production` (EC2)    | `production`                                 |

### Frontend `.env`

Create a `.env` file inside the `frontend/` directory:

```env
# ---- frontend/.env ----

# Backend API base URL
# Local development → http://localhost:5000
# EC2 production    → http://<YOUR_EC2_PUBLIC_IP>:5000
VITE_API_URL=http://localhost:5000
```

| Variable       | Description                          | Local Value                | EC2 Value                              |
| -------------- | ------------------------------------ | -------------------------- | -------------------------------------- |
| `VITE_API_URL` | Base URL the frontend uses for API calls | `http://localhost:5000` | `http://<YOUR_EC2_PUBLIC_IP>:5000`     |

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


# Create the backend .env file
nano .env
```

Paste the following (replace with your actual MongoDB credentials):

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/event-registration?retryWrites=true&w=majority
NODE_ENV=production

# Create the frontend .env file
nano .env
```

Paste the following (replace `<YOUR_EC2_PUBLIC_IP>` with your actual EC2 IP):

```env
VITE_API_URL=http://<YOUR_EC2_PUBLIC_IP>:5000
```
