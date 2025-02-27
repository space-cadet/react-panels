# React Resizable Draggable Panels

A React application demonstrating the implementation of resizable and draggable panels. This project showcases how to create a flexible user interface with adjustable panels that users can resize and reposition according to their needs.

## Features

- ✨ Resizable panels with intuitive drag handles
- 🔄 Draggable panels for custom layout organization
- 📱 Responsive design that works across different screen sizes
- 🎨 Clean and modern UI using Tailwind CSS
- 🛠️ Built with Next.js and TypeScript for robust development
- 🧩 Modular component architecture for easy customization

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd react-panels
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
react-panels/
├── app/                    # Next.js app directory
│   ├── components/        # React components
│   │   ├── Panel.tsx     # Panel component
│   │   ├── PanelContainer.tsx
│   │   ├── Scene.tsx
│   │   └── Viewport.tsx
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Shared components
│   └── ui/               # UI components from shadcn/ui
├── styles/               # Global styles
└── public/               # Static assets
```

## Usage

The panels can be:
- Resized by dragging the edges
- Moved by dragging the header
- Minimized using the minimize button
- Customized with different content

Example:
```tsx
<PanelContainer>
  <Panel title="Panel 1">
    {/* Your content here */}
  </Panel>
  <Panel title="Panel 2">
    {/* Your content here */}
  </Panel>
</PanelContainer>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
