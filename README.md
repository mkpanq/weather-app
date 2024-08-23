# Simple React Weather App

This is a simple weather application built using React. It fetches weather data from the [WeatherAPI](https://www.weatherapi.com/) and displays the current weather conditions for a given location.

Before you start, it's worth to install [asdf](https://asdf-vm.com/) - a version manager for various tools and languages. All required versions of tools used in this project were installed using `asdf`.\
If you don't use it, just look at the `.tool-versions` file to get to know which versions you need to install locally.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Environment Variables

You need to set up environment variables to configure the weather API:

- `VITE_WEATHER_API_URL`: The base URL for the weather API.
- `VITE_WEATHER_API_KEY`: Your API key for accessing the weather API.

Best would be creating a `.env.local` file in the root of the project, copy following lines and add values with your actual API URL and key:

### 4. Run the Development Server

```bash
pnpm run dev
```

This will start the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
