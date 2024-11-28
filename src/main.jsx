import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext'; // Correct import

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);
