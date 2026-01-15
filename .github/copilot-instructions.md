<!-- Copilot / AI agent instructions for the static portfolio site -->
# Repo overview

This is a small static portfolio site (no build system). Key runtime is client-side JavaScript that loads JSON data to render galleries. There are two nearly-identical gallery pages:

- `index.html` — image portfolio, loads `portfolio.json`.
- `indexvideo.html` — motion/ video portfolio, loads `portfolio_video.json`.

Both pages initialize GLightbox from a CDN and dynamically create `<a class="glightbox">` elements with `href` pointing to the media file and a child `<img>` for the thumbnail.

# Key files and patterns (use these as references)

- `index.html` and `indexvideo.html`: fetch JSON, iterate entries, create anchors and images, then call `GLightbox({ selector: '.glightbox' })`.
- `portfolio.json` and `portfolio_video.json`: arrays of objects with keys: `thumb`, `full`, `alt`. Example entry:
  ```json
  { "thumb": "images/video/thumbs/thumb04_AE01.png", "full": "images/video/AE_P01.mp4", "alt": "Project title" }
  ```
- `styles.css`: grid layout under `.portfolio`, uses `aspect-ratio` for square tiles and `object-fit: cover` on thumbnails.
- `js/lightbox.js`: present but currently empty — use it if you need custom lightbox helpers instead of inlining code in the HTML.

# What an AI agent should know/do first

1. This is a static site — run it with any static server (do not open files with `file://` in the browser).
   - Quick dev server (PowerShell):
     ```powershell
     cd c:\Users\mail\OneDrive\PIX\PORTFOLIO\www; python -m http.server 8000
     ```
   - Or use VS Code Live Server extension.
2. When changing the gallery rendering, update both `index.html` and `indexvideo.html` (they duplicate logic). Consider centralizing code into `js/lightbox.js` and including it in both pages.
3. New gallery items: add an object to the appropriate JSON file. Use relative paths under `images/`.

# Project-specific conventions

- JSON fields are minimal: `thumb`, `full`, `alt`. Keep these keys exactly as they are — the HTML fetch code expects them.
- Thumbnails and full media are referenced by relative paths from `www/`. Video files are under `images/video`, video thumbnails under `images/video/thumbs`.
- GLightbox is used from CDN (no npm or lockfile). Don't add a package manager unless converting to a build workflow.

# Common tasks & examples

- Add new image to `portfolio.json`:
  - Put thumbnail in `images/product/` (or its `thumbs/` subfolder if you prefer), put full image where you want, then add an object to `portfolio.json`.
- Add new video to `portfolio_video.json`:
  - Put MP4 in `images/video/` and thumbnail in `images/video/thumbs/`. Add entry with `thumb` pointing to PNG and `full` pointing to MP4.
- Refactor duplicated fetch/init logic: move the fetch + DOM construction into `js/lightbox.js` and include it in both HTML pages. Ensure the JSON filename is configurable (e.g., data attribute on `.portfolio` container).

# Debugging notes

- If the gallery shows no items: open browser DevTools and check Network for `portfolio.json` / `portfolio_video.json`. If request is blocked or 404, the server wasn't started in the repo root or paths are wrong.
- Videos may not play when opened directly without proper lightbox settings — ensure GLightbox supports `mp4` (it does) and that `href` points to the correct file.

# When to ask the repo owner

- Which lightbox behavior is desired for videos (autoplay, controls, loop)? The current code does not pass extra options to GLightbox.
- Do you want one canonical JS module for gallery rendering and more metadata fields (caption, year, role)? If yes, I'll centralize code into `js/lightbox.js` and update both HTML pages.

# Where to look next in this repo

- `index.html`, `indexvideo.html` — rendering entry points
- `portfolio.json`, `portfolio_video.json` — content sources
- `styles.css` — visual conventions and layout

If anything is unclear or you want the agent to perform a follow-up (refactor duplication, add a sample item, or implement `js/lightbox.js`), tell me which task to do next.
