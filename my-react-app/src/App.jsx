import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import ThemeToggler from "./components/ThemeToggler";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>

        
        <Login />
        <UserProfile />

      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
