# Penultimate Pendulum Studio

Official website for Penultimate Pendulum Studio. A collection of original pendulum paintings, where precision meets chaos.

Website: https://penultimatependulum.com (connect after launch)

## Publish on GitHub Pages

1. Upload the **contents** of this folder to the root of the `penultimatependulum.github.io` repository. (Do not upload the enclosing `pps-site` folder.)
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main`, folder `/ (root)`, and save.
4. After deployment, visit `https://penultimatependulum.github.io/`.
5. Connect your GoDaddy domain later, after reviewing the site.

## Updating paintings

Edit `data/paintings.json`. Each painting has a title, year, dimensions, medium, status, description, image, Marketplace URL, and published flag.

Upload photographs to `assets/paintings/` and set `image` to a relative path such as `assets/paintings/my-painting.jpg`. Keep `image` empty to show a clearly labeled placeholder. Set `published` to `false` to hide an entry. Use `Available`, `Sold`, or `Private Collection` for status.

**Important:** Do not put private financial data, buyer details, or unpublished sensitive information into the public repository.

## Instagram

Replace the `INSTAGRAM_URL` value at the top of `script.js` with your actual Instagram profile URL, then remove the setup note in `index.html`.

## Next phase

Add a Git-based CMS (such as Pages CMS) to manage painting records and image uploads through a graphical interface. This initial version deliberately does not include an untested CMS configuration.

## Files

- `index.html` — page structure
- `styles.css` — visual design
- `script.js` — gallery and artwork details
- `data/paintings.json` — painting records
- `assets/studio-logo.png` — approved logo
- `assets/favicon.svg` — temporary simplified browser icon
