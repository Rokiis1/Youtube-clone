import Navigation from "./layouts/Navigation";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="max-h-scree overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navigation />
      </div>
      <Router />
    </div>
  );
};

export default App;
