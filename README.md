# BigCommerce Local Impersonate

Simple Chrome extension for copying BigCommerce impersonation session of current active tab to local Stencil (defaults to `http://localhost`). Useful for production where you can't just edit the password, or if you don't want to copy over the cookies manually yourself.

## Installation

You need a browser with Chrome extension support for these:

1. Clone this repo or download the source code ZIP of this repo and extract it.
2. Go to your browser's Extensions page (e.g. chrome://extensions/ for Chrome, brave://extensions/ for Brave, etc.).
2. Click **Load Unpacked** then select the folder of the project.

## Usage

1. Impersonate from the admin control panel.
2. While in the newly opened tab, open the extension. You can also bookmark the extension so that it's pinned.
2. If you are accessing your local Stencil on localhost (e.g. `http://localhost:3000`) you can just click **Copy Session**. If you are using the local IPv4 host `http://127.0.0.1` or tunnelling through a different URL, provide that in the target URL first. Format is `<protocol>://<host>` (e.g. `http://localhost`, `https://somewhere.trycloudflare.com`, etc.).
3. Go to where you are serving the local Stencil server, it should now load the impersonated customer.

> [!IMPORTANT]  
> Make sure your local Stencil matches environment with the storefront where you copied the impersonation session from.
