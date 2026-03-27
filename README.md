# MoskiFree - Natural Herbal Mosquito Coils

## Project Overview

MoskiFree is a modern web application for a natural herbal mosquito coil company. The website showcases their range of 100% natural herbal mosquito coils that provide effective protection against mosquitoes without using harsh chemicals. The site is designed to be family-friendly, pet-safe, and environmentally conscious.

### Main Features:
- **Product Showcase**: Displays various mosquito coil products with detailed information
- **Natural Ingredients**: Highlights the herbal and natural composition of the products
- **Safety Information**: Emphasizes safety for families, pets, and the environment
- **Accessibility**: Uses the Boafo accessibility widget to make the site accessible to all users
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### Technologies Used:
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Next.js** for server-side rendering and routing
- **Boafo Accessibility Widget** for enhanced accessibility

### Accessibility Features
This website uses the **Boafo Accessibility Widget** to make the site accessible to all users, including those with disabilities. The widget provides features like:
- Screen reader compatibility
- Keyboard navigation
- High contrast mode
- Font size adjustments
- And more...

## How to Get Your Boafo API Key

To use the Boafo accessibility widget, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Navigate to the API Keys section
5. Copy your API key

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo accessibility widget into your project, refer to the official integration guide:

**[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

The guide covers:
- Installation steps
- Configuration options
- Customization features
- Troubleshooting tips

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/yai-project-kappa.git
   cd yai-project-kappa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit the .env file and add your Boafo API key
   VITE_BOAFO_API_KEY=your_actual_boafo_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open the application**
   Open your browser and navigate to `http://localhost:3000/`

### Building for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

## Support

For questions about the Boafo accessibility widget, visit [boafo.co](https://boafo.co) or refer to the [integration guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing).