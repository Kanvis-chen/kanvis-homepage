---
title: Kanvis Homepage Deployment
type: SOL
source_type: self
source: 2026-07-19 Kanvis 主页部署与 X 推广需求
date: 2026-07-19
tags: [Kanvis, 网站部署, EdgeOne, GitHub, X推广]
themes: [网站上线, 全球访问, 静态托管, 引流]
relationships: ['SOL-003_回应']
status: review
---

# Kanvis Homepage Deployment

## Current status

The homepage is a static HTML site. It does not need an application server or database for the current release.

- Source repository: `Kanvis-chen/kanvis-homepage`
- Current public hosting: GitHub Pages free static hosting
- Current public URL: `https://kanvis-chen.github.io/kanvis-homepage/`
- Target formal hosting: EdgeOne Makers free edition, pending EdgeOne account login
- Target production project name: `kanvis-homepage`
- Target production domain: the EdgeOne platform domain assigned after deployment
- Future branded domain: a purchased custom domain connected by CNAME

### Verification on 2026-07-19

- `/`, `/open/`, and the public `Kanvis Video` repository return HTTP 200.
- HTTPS is enabled and the deployed homepage assets, navigation, social metadata, and paid-consultation QR code have passed browser checks.
- An independent Check-Host probe returned HTTP 200 from 12/12 overseas nodes.
- Mainland China has not yet passed an independent multi-carrier probe. GitHub Pages remains the working launch endpoint, but it must not be described as a guaranteed mainland delivery service.
- EdgeOne documents that Pages in the global availability zone excludes mainland China. Mainland acceleration requires a compliant, ICP-filed custom domain. Therefore a free platform subdomain alone cannot honestly guarantee both mainland and overseas delivery.

The Git repository is the source of truth. GitHub Pages is the current immediate public endpoint. EdgeOne will become the primary delivery layer after account authorization because mainland China accessibility through GitHub Pages is not predictable enough for a commercial homepage.

## Public naming contract

| Layer | Public name | Purpose |
|---|---|---|
| Umbrella | Kanvis System | AI collaboration and operating system |
| Content system | Kanvis Content OS | Obsidian content and project management |
| Video repository | Kanvis Video | Open-source video Skills and contracts |
| First Skill | Kanvis Article to Video | Article-to-video workflow; `$kanvis-article-to-video` |
| Local editor | Kanvis Studio | Codex/Obsidian local video workspace; `$kanvis-studio` |

`Kanvis Cut`, `Kanvis Video Workbench`, and `article-to-avatar-video` are retired public names. `VisualHyper` may remain only in internal compatibility identifiers.

## Deploy from this directory

```powershell
edgeone login --site global
edgeone makers deploy . --name kanvis-homepage --env production --area global
```

After deployment:

1. Record the production URL in this file and in the project address checklist.
2. Verify `/`, `/open/`, `/open/?tab=skill`, and `/open/?tab=workbench` return HTTP 200.
3. Check every local image, GitHub link, navigation link, and QR-code interaction.
4. Test desktop and mobile layouts.
5. Run an overseas probe and at least two independent mainland China probes.
6. Put the HTTPS production URL in the X profile Website field and pin one introduction post.

## Architecture boundary

The public homepage contains author information, products, services, open-source navigation, and paid-consultation entry points. It must never contain provider API keys.

Kanvis Studio and Kanvis Content OS remain local applications. The website links to their documentation and repositories; it does not try to open arbitrary files on a visitor's computer.

Future image/video generation requires a backend or edge function:

```text
Browser
  -> authenticated API endpoint
  -> rate limit and quota check
  -> server-side provider request
  -> object storage
  -> signed result URL
```

Provider keys stay in server-side environment variables. Never call paid generation providers directly from public browser JavaScript.

## X promotion

Use the production HTTPS URL in the X profile Website field. Keep the bio focused on one promise, and use a pinned post to explain the free Skill, Kanvis Studio, course, and paid consultation path. Do not use a localhost URL, repository URL, or temporary preview URL as the long-term profile link.
