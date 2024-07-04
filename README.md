# Vue Figma Plugin Template

This template should help get you started developing Figma plugin with Vue and TypeScript in Vite.\
Plugin will open a window to prompt the user to enter a number, and it will then create that many rectangles on the screen.

## Development

You can start developing your Figma plugin by following these steps.

### 1. Preparing

Clone this repository using [this template](https://github.com/dimkapitonov/vue-figma-plugin/generate).\
Update `manifest.json` in `public` folder with your plugin's name and ID.\
Install the necessary dependencies.

```bash
pnpm install # If you don't have pnpm, run: npm install -g pnpm
```

### 2. Plugin UI

Start the `dev` mode.\
And visit link that shows in terminal.

```bash
pnpm dev
```

### 3. Code

Start the `watch` mode. Run and test your plugin in Figma.\
Connect your plugin `manifest.json` in `dist` folder.

```bash
pnpm build:watch
```

## Build

Build the plugin when development is complete.\
The final files can be found in the `dist` folder.

```bash
pnpm build
```
