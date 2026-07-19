# Security Policy

## Reporting

Do not open a public issue containing credentials, customer data, private media, personal contact details, or local computer paths. Use GitHub private vulnerability reporting for security-sensitive reports.

## Publication boundary

This repository is a public static website. Only assets intentionally approved for public display may be committed. Before every push, check the staged diff, tracked files, full Git history, and image metadata for:

- API keys, access tokens, cookies, sessions, passwords, private keys, and signed URLs;
- `.env`, local runtime state, databases, logs, caches, and build artifacts;
- computer usernames, absolute paths, device information, private email addresses, phone numbers, and IDs;
- customer materials, private QR codes, chat records, portraits, voices, and account screenshots.

The business contact QR code in `assets/kanvis-paid-consultation-qr.jpg` is an explicitly approved public asset. That approval does not apply to any other QR code or contact file.

If a secret was ever committed, revoke or rotate it and remove it from Git history. Removing only the current file is insufficient.
