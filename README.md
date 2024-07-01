# Vue Figma Plugin Template

This template should help get you started developing Figma plugin with Vue and TypeScript in Vite.

Plugin will open a window to prompt the user to enter a number, and it will then create that many rectangles on the screen.

## Development

You can start developing your Figma plugin by following these steps:

1. Clone this repository.
2. Install the necessary dependencies.
   ```bash
   pnpm install
   ```
3. Update `manifest.json` in `public` folder with your plugin's name and ID.
4. Start the `--watch` mode.
   ```bash
   pnpm run watch
   ```
5. Connect your plugin in Figma with `manifest.json` in `dist` folder.
6. Test the plugin that is running in `--watch` mode.
7. Build the plugin when development is complete.
   ```bash
   pnpm run build
   ```
8. The final files can be found in the `dist` folder.
