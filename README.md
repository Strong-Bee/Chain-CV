# ChainCV

ChainCV is a Web3 resume platform that allows professionals to create **blockchain-verified resumes and credentials**.

The goal of ChainCV is to prevent resume fraud and build trust in the hiring process by storing resume credentials on blockchain.

---

## 📸 Preview

![ChainCV Demo](./public/demo.png)

---

## 🚀 Features

- Resume Builder
- Blockchain Resume Verification
- Credential Verification
- Public Resume Profile
- Recruiter Dashboard
- IPFS Resume Storage
- Skill Badge Verification
- Resume Hash Verification

---

## 🧠 Problem

Many resumes contain inaccurate or unverifiable information.

Companies spend a lot of time verifying:

- Education history
- Work experience
- Certificates
- Professional skills

This manual verification process slows down hiring and increases the risk of hiring fraud.

---

## 💡 Solution

ChainCV stores resume credentials on blockchain so they can be verified instantly.

Each resume generates a **cryptographic hash** that is stored on blockchain.

This allows companies to:

- verify candidate credentials instantly
- prevent resume manipulation
- reduce background verification time

---

## 🏗 Architecture

ChainCV uses a hybrid Web2 + Web3 architecture.
```

User → ChainCV Platform → Database → Blockchain → Verification

```

Components:

- Frontend (Next.js)
- Backend API
- Database (PostgreSQL)
- Blockchain verification layer
- IPFS decentralized storage

---

## 🛠 Tech Stack

### Frontend
- Next.js
- TypeScript
- TailwindCSS

### Backend
- Node.js
- Prisma ORM
- PostgreSQL

### Web3
- Polygon Network
- Solidity Smart Contracts
- IPFS Storage

---

## 📂 Project Structure

```

Chain-CV
│
├ app
├ components
├ contracts
├ hooks
├ lib
├ prisma
├ styles
├ types
├ utils
│
├ package.json
├ README.md
└ tsconfig.json

````

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Strong-Bee/Chain-CV.git
````

Enter project folder:

```bash
cd Chain-CV
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 🔗 Environment Variables

Create `.env` file:

```
DATABASE_URL=
NEXT_PUBLIC_RPC_URL=
IPFS_API_KEY=
```

---

## 🧪 Development

Run development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create new branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

## 🌎 Vision

Build the global infrastructure for **verified professional identity**.

ChainCV aims to become the **standard for blockchain-verified resumes and professional credentials**.

---

## 👨‍💻 Author

Strong-Bee
GitHub: [https://github.com/Strong-Bee](https://github.com/Strong-Bee)