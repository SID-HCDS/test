# Customizable Web App UI

This is a simple Node.js/Express web app that lets you edit and preview HTML for a customizable UI.  
You can save your custom HTML, view it in a browser, and deploy the app to Azure App Service.

## Features

- Live-edit and save HTML UI from the browser.
- Preview your custom HTML immediately.
- Ready to push to GitHub and deploy to Azure.

## Usage

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Run the app locally:**

   ```
   npm start
   ```

   Visit [http://localhost:3000](http://localhost:3000).

3. **Customize your UI:**  
   - Edit HTML in the textarea.
   - Click "Save" to store it.
   - Click "Preview" to see the rendered HTML.

## Deploying to Azure

1. **Push to GitHub:**  
   - Initialize a git repo and push the code to your GitHub repository.

2. **Deploy on Azure App Service:**  
   - Create a new Web App on Azure Portal.
   - Connect your GitHub repo as the deployment source.
   - Azure will detect Node.js and run `npm install` and `npm start` by default.

3. **Access your deployed app’s URL.**

## Notes

- Saved custom HTML is stored in `saved/custom.html`.
- For production, consider adding authentication, validation, and security enhancements.
