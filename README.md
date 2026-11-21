# CommunityHub

CommunityHub is a team project built with React (Vite) for IYF Season 12, Week 8 to Week 12.

## Live Demo

**Live Website:** https://iyf-s12-communityhub-team-gracewambui0432.vercel.app

**Team Repo:** https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432

## Team

| Name | GitHub | Role |
| --- | --- | --- |
| Grace Wambui | @gracewambui0432 | Team Lead |
| Claire Gakuru | @gakuruclaire39-cmd | Frontend Developer |

See `CONTRIBUTORS.md` for full contribution details.

## Features (Week 8 MVP)

- Header, Footer and Sidebar layout
- PostList - shows posts from state
- CreatePost form - adds a new post to the list
- Profiles, Posts, Comments, Auth (tracked as GitHub Issues)
- Daily lesson exercises in `frontend/src/exercises/<username>/`
- Helper functions in `src/utils/` with tests

## Tech Stack

- React + Vite
- JavaScript
- Function components + `useState` only - no class components
- Vitest for tests

## How to Run Locally

```bash
cd frontend
npm install
npm run dev
```
## How to test
cd frontend
npm test

## Project Structure
```
CommunityHub/
├── CONTRIBUTORS.md
├── README.md
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── Sidebar.jsx
│       │   ├── PostList.jsx
│       │   └── CreatePost.jsx
│       ├── exercises/
│       │   ├── gakuruclaire39-cmd/
│       │   │   └── Week8/
│       │   └── gracewambui0432/
│       │       └── Week8/
│       └── utils/
│           ├── helpers.js
│           └── helpers.test.js
```

## How We Work

We do not push directly to main. Main is protected and needs a PR and 1 approval.
We create a branch, make a change, open a PR, review each other, then merge.
