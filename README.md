#  Advanced Teams Task And Project Manager Application ---  

---

Please visit this Link for well documented APIs using Postman
https://www.postman.com/maintenance-candidate-14038000/workspace/my-workspace/collection/41837948-6578db17-8699-446d-b634-03f313d4042b?action=share&creator=41837948

---

## 📌 Project Overview  

Welcome to **TaskManager**, a powerful and scalable multi-tenancy project management system built with **Node.js**, **MongoDB**, and  Designed for real-world B2B needs, this project delivers features like Google Sign-In, workspace management, project tracking, task collaboration, role-based permissions, and more.   

---

## 🌟 Key Features  

- 🔐 **Authentication** (Google Sign-In, Email, Password)  
- 🏢 **Create & Manage Multiple Workspaces**  
- 📊 **Projects & Epics Management**  
- ✅ **Tasks** (CRUD, Status, Priority, Assignee)  
- 👥 **Roles & Permissions** (Owner, Admin, Member)  
- ✉️ **Invite Members to Workspaces**  
- 🔍 **Filters & Search** (Status, Priority, AssignedTo)  
- 📈 **Analytics Dashboard**  
- 📅 **Pagination & Load More**  
- 🔒 **Cookie Session Management**  
- 🚪 **Logout & Session Termination**  
- 🌱 **Seeding** for Test Data  
- 💾 **Mongoose Transactions** for Robust Data Integrity  

---

## 🚀 Tools & Technologies  

This project leverages the latest tools and frameworks for modern development:  

- **Node.js**: Scalable backend architecture    
- **MongoDB & Mongoose**: Flexible and scalable database solutions  
- **Google OAuth**: Seamless Google Sign-In integration  
- **TypeScript**: For a type-safe codebase
- 
---

## 🔄 Getting Started  

 ``` bash
git clone <repo-url>
cd backend
npm install
# create .env based on .env.example
npm run dev

```

### 1. Set Up Environment Variables  

```plaintext  
PORT=5000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/teamsync_db"  

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>  
GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```  

### 2. Run the Application  

Install dependencies and start the development server:  

```bash  
npm install  
npm run dev  
```  

Access the backend at `http://localhost:5000`.  

---

📫 What I Learned

1. Building scalable APIs with clean service architecture

2. Implementing robust access control and user sessions

3. Designing MongoDB schemas for complex relationships

4. Working with cron jobs and real-time task updates

5. Debugging production-level errors and deploying features fast
