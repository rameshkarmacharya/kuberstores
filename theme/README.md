# KuberStores Shopify Theme

A modern, responsive Shopify theme designed for KuberStores e-commerce platform.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Customizable color scheme and typography
- Modern product showcase
- Fast and optimized performance
- Clean and maintainable code

## Directory Structure

```
theme/
├── assets/          # CSS and JavaScript files
├── config/          # Theme configuration files
├── layout/          # Layout templates (theme.liquid)
├── sections/        # Reusable section components
├── snippets/        # Reusable template snippets
├── templates/       # Page templates (product, collection, etc.)
├── locales/         # Localization files
└── theme.toml       # Theme metadata
```

## Development

### Prerequisites

- Node.js 16.x or higher
- Shopify CLI

### Installation

1. Clone this repository
2. Navigate to the theme directory
3. Install dependencies: `npm install`

### Local Development

To test the theme locally:

```bash
shopify theme dev
```

This will start a local development server and allow you to preview changes in real-time.

### Deployment

To deploy to Shopify:

```bash
git push origin main
```

## Customization

### Colors

Edit the color variables in [assets/theme.css](assets/theme.css):

```css
:root {
  --color-primary: #000000;
  --color-secondary: #FFFFFF;
  --color-accent: #007BFF;
}
```

### Theme Settings

Modify [config/settings_schema.json](config/settings_schema.json) to add new customizable options in the Shopify theme editor.

## Support

For issues or questions, please contact: dev@kuberstores.com

## License

All rights reserved © KuberStores 2024
