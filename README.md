# Online Teacher Training Platform – Uva Provincial Department of Education  

This web application is designed to facilitate an online teacher training course on Multi-Level Teaching Methods. It enables educators to complete course modules, track their progress, and receive certification upon approval.  

<details>
  <summary>  Screenshots</summary>
<p align="center">
  <img src="doc/screenshot6.png" width="30%" />
  <img src="doc/screenshot5.png" width="30%" />
  <img src="doc/screenshot4.png" width="30%" />
</p>
<p align="center">
  <img src="doc/screenshot3.png" width="30%" />
  <img src="doc/screenshot2.png" width="30%" />
  <img src="doc/screenshot1.png" width="30%" />
</p>
</details>

## 🌟 Features  

- **User Authentication**: Secure login and registration using Lucia-auth.  
- **User Dashboard**: Track progress through 8 course modules.  
- **Module Completion**: Completed modules are marked for users.  
- **Admin Panel**:  
  - View and manage user progress.  
  - Approve users for certification.  
  - View and manage generated certificates.  
- **Certificate Generation**: Users receive a PDF certificate upon completing all modules and getting admin approval.  

## 🛠️ Tech Stack  

- **Frontend**: SvelteKit, TailwindCSS, DaisyUI  
- **Backend**: Prisma (ORM), Lucia-auth (Authentication)  
- **Database**: Supports PostgreSQL, MySQL, SQLite, etc.  
- **PDF Generation**: pdf-lib  
