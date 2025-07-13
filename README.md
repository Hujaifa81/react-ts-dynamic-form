
# 🧩 Dynamic Form App (React + TypeScript)

A responsive, dynamic form-based application built with **React** and **TypeScript**, featuring real-time validation with **React Hook Form**, field management, and user feedback using **SweetAlert2** and **React Toastify**.

🔗 **Live Demo**: [Live Demo](https://gregarious-licorice-dcffbd.netlify.app/)

---

## 🚀 Features

- ✅ Built with **React + TypeScript**
- 📁 Organized by Components, Layouts, Routes, Interfaces
- 🧩 Tasks 1–8 demonstrating dynamic form features
- 🔄 Add / Delete dynamic rows
- 🎯 Validations using **react-hook-form**
- 💬 Alerts with **SweetAlert2**
- 🔔 Toasts with **React Toastify**
- 🧭 Routing via **React Router DOM**
- 📋 Submitted data shown in table format
- 🎨 Styled with **Tailwind CSS**

---

## 🛠️ Technologies Used

| Library / Tool         | Purpose                                    |
|------------------------|--------------------------------------------|
| React                  | Frontend framework                         |
| TypeScript             | Static typing                              |
| React Hook Form        | Form validation and management             |
| React Router DOM       | Client-side routing                        |
| SweetAlert2            | Action alerts                              |
| React Toastify         | Non-blocking toast notifications           |
| Tailwind CSS           | Utility-first CSS                          |
| Netlify                | Hosting and deployment                     |

---

## 📁 Folder Structure

```
src/
├── assets/                  # Static assets
├── components/              # Tasks and reusable components
│   ├── Nav.tsx
│   ├── Task1.tsx – Task8.tsx
├── interface/
│   └── formValues.ts        # TypeScript interfaces
├── layouts/
│   └── MainLayout.tsx       # Shared layout wrapper
├── routes/
│   └── Routes.tsx           # App route config using React Router DOM
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Hujaifa81/react-ts-dynamic-form.git

# Move into the project directory
cd react-ts-dynamic-form

# Install dependencies
npm install
```

---

## 🧪 Run Locally

```bash
npm run dev      # if using Vite
# or
npm start        # if using Create React App
```

---

## 🚀 Deployment Notes (Netlify)

If you're using **React Router DOM** and deploying to Netlify:

✅ Create a `_redirects` file inside the `dist` folder:

```
/*    /index.html   200
```

This prevents 404 errors on page refresh for routes.

---

## 🙌 Acknowledgements

- [React Hook Form](https://react-hook-form.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/en/main)

---

## 🧑‍💻 Author

Developed by **[Md Abu Hujaifa]**  
Connect on [LinkedIn](https://www.linkedin.com/in/md-abu-hujaifa/) or [GitHub](https://github.com/Hujaifa81) or [Portfolio](https://md-abu-hujaifa.netlify.app/)

---

## 📄 License

This project is licensed under the MIT License.
