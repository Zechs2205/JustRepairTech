
  # Simple website creation

  This is a code bundle for Simple website creation. The original project is available at https://www.figma.com/design/43b5lupBsg20Un4qAEyxdJ/Simple-website-creation.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying To GitHub Pages

  This repository now includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and publishes the `dist` folder to GitHub Pages on every push to `main`.

  To use a custom domain, configure it in your GitHub Pages settings for the repository. If you want the domain to be preserved automatically on deploys, add a `public/CNAME` file containing the exact domain name before the next build.
  