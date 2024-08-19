# TrackMyBus🚌

TrackMyBus is a web application designed to help users track bus schedules and information by entering the vehicle number. It fetches bus details from a live API and displays the data in an interactive and responsive UI.
## Features

- Fetch and display real-time bus data based on vehicle number.
- Responsive design for seamless use on various devices.
- Smooth and dynamic user interface.

## Technologies Used 🧑‍💻

- **Vite.js** - Fast front-end build tool and development server.
- **Vanilla JavaScript** - Core language for the app logic.
- **Three.js** - Library for rendering the 3D model.
- **HTML5 & CSS3** - Structuring and styling the application.

## Installation 🛠️

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/TrackMyBus.git
2. **Navigate to the project directory:**
   ```code
   cd TrackMyBus
3. **Install the dependencies:**
    ```bash
    npm install
4. **Run the development server**
   ```bash
   npm run dev

## Project Structure 📑
The main components of the project include:

**index.html** - Main HTML file.
**main.js** - Entry point for the application.
**api.js** - Handles form submissions and fetching bus data from the API.
**three.js** - Handles 3D model rendering using Three.js.
**style.css** - Styles the entire application.
**public/** - Contains static assets like the 3D model and images.

## Deployment ☁️
When deploying this application, ensure that the file paths are correctly referenced, especially if you're deploying to a subdirectory. You may need to update the base option in vite.config.js.

To build the project for production:
```bash
npm run build
```
You can then deploy the contents of the dist/ directory to your hosting service.

## Usage 
1. Enter the vehicle number in the input field and click Go.
2. The app fetches data from the API and displays it, including the bus number, trip details, and station schedules.

## API Reference

The app fetches bus data using the following API:

```bash
https://busapi.amithv.xyz/api/v1/search?vehicle_number={busNumber}
```
## Live


[TrackMyBus](https://trackmybus.abinthomas.dev)


--------------------------------
## Contributing

Contributions are welcome! Feel free to open a pull request or report issues.






