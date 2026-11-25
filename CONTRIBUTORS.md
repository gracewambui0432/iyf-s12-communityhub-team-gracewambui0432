# Contributors

Week 8 - CommunityHub - IYF Season 12
We each wrote our own part in our own PR.

---

## Grace Wambui
- GitHub: https://github.com/gracewambui0432
- Role: Team Lead

### My Feature - I own this end-to-end
Profiles

### What I Did - Week 8
- Created team repo `iyf-s12-communityhub-team-gracewambui0432` with README + Node .gitignore
- Added Claire as collaborator and protected `main` (PR + 1 approval)
- Scaffolded frontend: `npm create vite@latest frontend -- --template react`
- Deleted Vite demo README and `src/assets`, replaced demo App.jsx with `<h1>CommunityHub</h1>`
- Ran `npm run build` to confirm it works
- Built App.jsx layout and posts state with `useState`
- Built Header in `frontend/src/components/Header.jsx`
- Built Footer in `frontend/src/components/Footer.jsx`
- Opened GitHub Issues for: profiles, posts, comments, auth

### My Exercises
- All in `frontend/src/exercises/gracewambui0432/`
- 15.1 Intro.jsx
- 15.2 Header, Footer, PostCard, Button, Sidebar
- 15.3 PostCard with props, PostList with map + key
- 15.4 Card with children, Layout
- 16.1 Counter, Toggle, UserForm
- 16.2 EventExamples, ContactForm
- 16.3 TodoList
- 16.4 Lifting state up

### Helper + Tests
- Helper in `frontend/src/utils/helpers.js`
- Tests in `frontend/src/utils/helpers.test.js` - 3+ tests, `npm test` passes

### PRs I Opened
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/12
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/15

### PRs I Reviewed
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/13
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/14


## Claire Wairimu
- GitHub: https://github.com/gakuruclaire39-cmd
- Role: Frontend Developer

### My Feature - I own this end-to-end
Posts

### What I Did - Week 8
- Built PostList in `frontend/src/components/PostList.jsx` - shows posts from state with `.map()` + `key`
- Built CreatePost in `frontend/src/components/CreatePost.jsx` - form adds new post, no direct mutation
- Built PostCard in `frontend/src/components/PostCard.jsx` - props: title, excerpt, author, date
- Built Sidebar in `frontend/src/components/Sidebar.jsx`
- Built Button in `frontend/src/components/Button.jsx` - defaults: text, variant, size
- Helped with App.jsx layout and styling
- All work on feature branches, never pushed to `main`

### My Exercises
- All in `frontend/src/exercises/gakuruclaire39-cmd/`
- 15.1 Intro.jsx - name, 3 paragraphs, current date, message based on time of day
- 15.2 Header, Footer, PostCard, Button, Sidebar
- 15.3 PostCard with props, Button with defaults, PostList with map
- 15.4 Card with children, Layout, UserGreeting
- 16.1 Counter, Toggle, UserForm with useState
- 16.2 EventExamples, ContactForm
- 16.3 TodoList - add, toggle, delete
- 16.4 Lifting state up

### Helper + Tests
- Helped with helper in `frontend/src/utils/helpers.js`
- Tests in `frontend/src/utils/helpers.test.js` - 3+ tests, `npm test` passes in `frontend/`

### PRs I Opened
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/13
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/14

### PRs I Reviewed
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/12
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/15

### Issues I Closed
https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/issues/5

## How We Work
- Every change: branch -> PR -> teammate review -> merge. Never push to `main`.
- Each person owns at least one feature.
- Exercises in `frontend/src/exercises/<username>/`, one branch per exercise.
- Function components + `useState` only. No class components.
- Components in `src/components/`.

##   Week 9 - CommunityHub

## Grace Wambui
### What I Did - Week 9
Lesson 18 - I own this end-to-end

- All in frontend/src/exercises/gracewambui0432/
- 18.1 Custom Hooks - useLocalStorage, useToggle, useForm with values / errors / touched / handleChange / handleBlur / reset
- 18.2 Styling - Button.module.css + Button.jsx, Tailwind setup, Card + Button with Tailwind variants
- 18.3 Component Library - src/components/shared/ Button / Input / Card / Modal / Avatar + index.js export all
- 18.4 Accessibility Audit - Lighthouse Accessibility before / after score in README, keyboard, labels, alt text, contrast, focus visible

### Mini Project - My Split - Routing, Pages & Layout
- src/App.jsx - I OWN IT - all Routes
- src/pages/Home.jsx - welcome + recent 3 posts
- src/pages/PostDetail.jsx - single post view
- src/pages/CreatePost.jsx - page wrapper
- src/components/Post/CreatePostForm.jsx - form + validation
- src/pages/About.jsx
- src/components/Layout/Header.jsx - with navigation
- src/components/Layout/Footer.jsx
- src/components/Layout/Sidebar.jsx
- src/main.jsx - BrowserRouter check
- Styling - CSS Modules / Tailwind + responsive + design system

### PRs I Opened - Week 9
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/44
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/40

### PRs I Reviewed - Week 9
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/38
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/39

## Claire Wairimu

### What I Did - Week 9
Lesson 17 - I own this end-to-end

- 17.1 useEffect Hook - Counter with useEffect on mount / on count change / cleanup with setInterval, WindowSize with resize listener +  cleanup, ThemeToggle with localStorage sync
- 17.2 Data Fetching - PostList fetch from jsonplaceholder, loading + error + empty states, custom hook hooks/useFetch.js returning     data, loading, error }
- 17.3 React Router - Routes in App.jsx, Layout with Outlet + Link, dynamic route posts/:postId, PostDetail with useParams + fetch, Navigation with useNavigate + NavLink
- 17.4 Loading & Error States - LoadingSpinner.jsx, ErrorMessage.jsx with retry, PostList using both + No posts found state

### Mini Project - My Split - Data, Posts & Reusable UI
- src/hooks/useFetch.js - fetch from JSONPlaceholder
- src/hooks/useLocalStorage.js - save likes + new posts
- src/pages/Posts.jsx - all posts + search / filter
- src/components/Post/PostList.jsx
- src/components/Post/PostCard.jsx - with Like button
- src/components/shared/Button.jsx
- src/components/shared/Input.jsx
- src/components/shared/Card.jsx
- src/components/shared/LoadingSpinner.jsx
- src/components/shared/ErrorMessage.jsx

## PRs I Opened - Week 9
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/38
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/39

## PRs I Reviewed - Week 9
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/44
- https://github.com/gracewambui0432/iyf-s12-communityhub-team-gracewambui0432/pull/40
