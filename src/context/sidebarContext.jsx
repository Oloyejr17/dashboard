import { createContext, useReducer } from "react";
import reducer from "../components/reducer/sidebarReducer";
import PropTypes from "prop-types";

// Initial state for the sidebar context
const initialState = {
    isSidebarOpen: false,
};

// Create SidebarContext
export const SidebarContext = createContext();

// SidebarProvider component
export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Function to toggle the sidebar state
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    return (
        <SidebarContext.Provider
            value={{
                isSidebarOpen: state.isSidebarOpen, // Pass only necessary state
                toggleSidebar, // Pass the toggle function
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

// Prop type validation for SidebarProvider
SidebarProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is required
};
