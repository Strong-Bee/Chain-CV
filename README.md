# ChainCV

<div align="center">
  <img src="public/deepseek_html_20260308_7cc722.png" alt="ChainCV Platform Preview" width="800" />
  
  <p align="center">
    <strong>Blockchain-Verified Resume Platform for the Modern Workforce</strong>
  </p>

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#problem--solution">Problem & Solution</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#contributing">Contributing</a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-13-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Solidity-0.8-363636?style=flat-square&logo=solidity" alt="Solidity" />
    <img src="https://img.shields.io/badge/Polygon-POS-8247E5?style=flat-square&logo=polygon" alt="Polygon" />
    <img src="https://img.shields.io/badge/IPFS-Storage-65C2CB?style=flat-square&logo=ipfs" alt="IPFS" />
  </p>
</div>

---

## 📋 Overview

ChainCV is a next-generation resume platform that leverages blockchain technology to create **tamper-proof, verifiable professional credentials**. By storing cryptographic hashes of resume data on the Polygon network, we enable instant verification of candidate qualifications while eliminating resume fraud.

### Key Benefits

- ✅ **Instant Verification**: Verify credentials in seconds, not days
- 🔒 **Tamper-Proof**: Blockchain ensures data integrity
- 🌐 **Decentralized Storage**: IPFS for permanent, distributed resume storage
- 👔 **Recruiter Dashboard**: Streamlined candidate verification workflow

---

## ✨ Features

### For Professionals

- **Interactive Resume Builder**: Create professional resumes with real-time preview
- **Blockchain Verification**: Generate and store resume hash on Polygon network
- **Public Profile Page**: Share your verified resume with a unique URL
- **Skill Badges**: Earn and display verified skill credentials
- **Credential Management**: Add and manage education, work experience, and certificates

### For Recruiters

- **Verification Dashboard**: Review and verify candidate credentials
- **Instant Validation**: Check resume authenticity against blockchain records
- **Candidate Search**: Find verified professionals by skills and credentials
- **Verification History**: Track all verification requests and results

### Technical Features

- **IPFS Integration**: Decentralized storage for resume documents
- **Smart Contract Verification**: On-chain hash verification system
- **Hash Validation**: Verify resume integrity through cryptographic hashing
- **Multi-Network Support**: Deployed on Polygon with easy migration to other EVM chains

---

## 🎯 Problem & Solution

### The Problem

Traditional resumes face critical challenges in the hiring process:

- **Fraud Prevalence**: 85% of employers catch lies on resumes
- **Manual Verification**: Companies spend 3-5 days verifying credentials
- **Inconsistent Formats**: No standardized way to verify professional history
- **Outdated Information**: No mechanism to ensure resume accuracy

### Our Solution

ChainCV addresses these challenges through blockchain technology:

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌─────────────┐
│   Create    │ → │    Store     │ → │   Verify    │ → │    Trust    │
│   Resume    │    │   on IPFS    │    │   on Chain  │    │   Result    │
└─────────────┘    └──────────────┘    └─────────────┘    └─────────────┘
```

1. **Creation**: Users build resumes through our intuitive interface
2. **Storage**: Resume data is stored on IPFS with content addressing
3. **Verification**: Cryptographic hash is stored on Polygon blockchain
4. **Trust**: Employers verify authenticity instantly without intermediaries

---

## 🏗 Architecture

ChainCV employs a hybrid architecture combining Web2 efficiency with Web3 security:

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Resume       │  │ Profile      │  │ Recruiter    │  │
│  │ Builder UI   │  │ Pages        │  │ Dashboard    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                    Backend Services                       │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ REST API     │  │ Prisma ORM   │  │ Smart        │  │
│  │              │  │              │  │ Contracts    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                    Data Layer                            │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ PostgreSQL   │  │ Polygon      │  │ IPFS         │  │
│  │ Database     │  │ Blockchain   │  │ Storage      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Core Components

- **Web Layer**: Next.js application with server-side rendering
- **API Layer**: RESTful endpoints for resume management
- **Database Layer**: PostgreSQL for user data and metadata
- **Blockchain Layer**: Smart contracts for hash verification
- **Storage Layer**: IPFS for decentralized document storage

---

## 🛠 Tech Stack

### Frontend Development

| Technology                                    | Purpose                         |
| --------------------------------------------- | ------------------------------- |
| [Next.js 13](https://nextjs.org/)             | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development           |
| [TailwindCSS](https://tailwindcss.com/)       | Utility-first styling           |
| [Ethers.js](https://docs.ethers.org/)         | Blockchain interaction          |

### Backend & Database

| Technology                                | Purpose             |
| ----------------------------------------- | ------------------- |
| [Node.js](https://nodejs.org/)            | Runtime environment |
| [Prisma](https://www.prisma.io/)          | Type-safe ORM       |
| [PostgreSQL](https://www.postgresql.org/) | Primary database    |
| [NextAuth.js](https://next-auth.js.org/)  | Authentication      |

### Blockchain & Web3

| Technology                             | Purpose                    |
| -------------------------------------- | -------------------------- |
| [Solidity](https://soliditylang.org/)  | Smart contract development |
| [Polygon](https://polygon.technology/) | Layer 2 scaling solution   |
| [IPFS](https://ipfs.tech/)             | Decentralized storage      |
| [Hardhat](https://hardhat.org/)        | Development environment    |

---

## 📁 Project Structure

```
Chain-CV/
├── app/                    # Next.js 13 App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components
│   └── blockchain/        # Web3 components
├── contracts/             # Solidity smart contracts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── utils/                 # Helper functions
├── package.json           # Dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- MetaMask wallet (for blockchain features)
- Polygon testnet MATIC (for testing)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Strong-Bee/Chain-CV.git
   cd Chain-CV
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/chaincv"

   # Blockchain
   NEXT_PUBLIC_RPC_URL="https://polygon-mumbai.g.alchemy.com/v2/your-api-key"
   PRIVATE_KEY="your-wallet-private-key"

   # IPFS
   IPFS_API_KEY="your-ipfs-api-key"
   IPFS_SECRET_KEY="your-ipfs-secret-key"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Deploy smart contracts**

   ```bash
   npx hardhat run scripts/deploy.js --network polygonMumbai
   ```

6. **Run development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🧪 Development Commands

| Command                    | Description                     |
| -------------------------- | ------------------------------- |
| `npm run dev`              | Start development server        |
| `npm run build`            | Build for production            |
| `npm start`                | Start production server         |
| `npm run lint`             | Run ESLint                      |
| `npm run format`           | Format code with Prettier       |
| `npm run type-check`       | Run TypeScript compiler check   |
| `npm run test`             | Run tests                       |
| `npm run deploy:contracts` | Deploy smart contracts          |
| `npm run verify:contracts` | Verify contracts on PolygonScan |

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Contribution Process

1. **Fork the repository**
   - Click the "Fork" button at the top of this page

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌍 Vision

ChainCV aims to revolutionize professional credentialing by building the **global standard for blockchain-verified identities**. We envision a future where:

- **Job seekers** own and control their professional data
- **Employers** verify credentials instantly without intermediaries
- **Educational institutions** issue verifiable digital diplomas
- **Skills** are portable and recognized globally

---

## 👨‍💻 Author

**Strong-Bee**

- GitHub: [@Strong-Bee](https://github.com/Strong-Bee)
- Project Link: [https://github.com/Strong-Bee/Chain-CV](https://github.com/Strong-Bee/Chain-CV)

---

<div align="center">
  <sub>Built with ❤️ for the future of work</sub>
</div>
