# ChainCV

**A professional profile platform designed around verifiable resume integrity.**

ChainCV is an early-stage Next.js application exploring how cryptographic fingerprints can help candidates and recruiters detect changes to a resume snapshot. The current repository contains the web foundation and a product landing page. Blockchain anchoring, IPFS persistence, authentication, recruiter workflows, and credential issuance must be implemented and configured before they can be considered available.

## Current implementation status

| Area | Status |
| --- | --- |
| Next.js App Router foundation | Implemented |
| Responsive ChainCV landing page | Implemented |
| Application metadata | Implemented |
| Resume builder and profile persistence | Not implemented |
| Authentication and authorization | Not implemented |
| Cryptographic resume fingerprint API | Not implemented |
| Smart contract deployment and verification | Not implemented |
| IPFS upload and retrieval | Not implemented |
| Recruiter dashboard and candidate search | Not implemented |

Do not use the demo profile on the landing page as a real user record or as evidence of a blockchain transaction.

## Technology

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

The dependencies currently declared in `package.json` are the source of truth for the implemented application. The architecture may later add a database, authentication provider, EVM tooling, and decentralized storage after their security and operational requirements are defined.

## Requirements

- Node.js 20.9 or later (use a currently supported Node.js LTS release)
- npm

## Run locally

```bash
git clone https://github.com/Strong-Bee/Chain-CV.git
cd Chain-CV
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run the TypeScript compiler without emitting files |

## Configuration

The landing page works without external services. Set `NEXT_PUBLIC_APP_URL` to the canonical public URL when deploying so metadata uses the correct origin.

Never put private keys, database credentials, IPFS secrets, or server-side API tokens in variables prefixed with `NEXT_PUBLIC_`. Do not commit real `.env` files.

## Security and verification principles

When implementing resume verification:

1. Keep original resume documents and personal information off-chain by default.
2. Store only the minimum commitment needed for integrity verification on-chain; avoid publishing personal data or predictable low-entropy identifiers.
3. Use a canonical, versioned serialization format before hashing. A hash is only meaningful when the exact input and normalization rules are defined.
4. Treat a matching hash as evidence that bytes or canonical data match—not proof that the resume's claims are true.
5. Verify wallet signatures and authorization on the server or contract boundary. Never trust client-submitted identity or ownership claims.
6. Keep signing keys and provider credentials in managed server-side secrets. Never expose a wallet private key to browser code.
7. Add consent, retention, deletion, rate limiting, and audit controls before handling real candidate data.

## Roadmap

- [ ] Resume editor with versioned snapshots
- [ ] Server-side canonicalization and cryptographic fingerprinting
- [ ] Secure authentication and profile ownership
- [ ] Optional encrypted/off-chain document storage
- [ ] Smart contract anchoring and independent verification
- [ ] Recruiter review workflow with explicit verification evidence
- [ ] Automated tests and deployment checks

## Contributing

1. Create a feature branch from `main`.
2. Keep changes focused and add tests for new behavior.
3. Run `npm run lint`, `npm run type-check`, and `npm run build`.
4. Open a pull request with a clear summary, test evidence, and any configuration changes.

## License

See [LICENSE](LICENSE) if present in the repository.
