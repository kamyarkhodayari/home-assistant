// Main Layout
import MainLayout from "./layouts/main";

import WeatherWidget from "./features/weather";

function App() {
  return (
    <>
      <MainLayout>
        <WeatherWidget />
      </MainLayout>
    </>
  );
}

export default App;
