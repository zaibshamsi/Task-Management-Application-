#  Advanced Teams Task Ans Project Management ---  

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

### 📺 Like, Share & Subscribe  

Don’t miss out! **[Subscribe to the Channel](https://tinyurl.com/subcribe-to-techwithEmma)** for more amazing content and exciting projects.  

Now, let’s dive into the demo of **TeamSync**! 🚀
