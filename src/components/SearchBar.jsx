import React from "react";

const SearchBar = ({ searchPokemon, filterPokemon }) => {

    // Consistent header style for padding and centering
    const headerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        textAlign: "center",
        padding: "10px 0 30px",
        backgroundColor: "#0f1629", // dark background so text stays visible
        // boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    };

    // Title style updated for light text on dark background
    const titleStyle = {
        fontSize: "3.5em", // Slightly larger title
        fontWeight: "800",
        color: "#f8fafc", // Very light text color
        letterSpacing: "1px",
        marginBottom: "20px",
        textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
    };

    // Input styles updated for dark theme
    const searchInputStyle = {
        padding: "12px 20px", // Increased padding
        fontSize: "1.1em",
        width: "100%",
        maxWidth: "450px", // Slightly wider max width
        borderRadius: "8px",
        border: "2px solid #374151", // Darker border
        outline: "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Deeper shadow
        textAlign: "left",
        backgroundColor: "#374151", // Dark input background
        color: "#f3f4f6", // Light text inside input
        transition: 'border-color 0.3s',
    };

    // Handlers for focus effect to give visual feedback
    const handleFocus = (e) => {
        e.target.style.borderColor = '#60a5fa'; // Blue focus ring
        e.target.style.boxShadow = '0 0 10px rgba(96, 165, 250, 0.5)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#374151'; // Back to dark gray
        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    };

    return (
        <header style={headerStyle} >
            {/* TITLE */}
            <div style={titleStyle} >
                Lets Catch Pokémon
            </div>

            {/* SEARCH INPUT */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px", }} >
                <input
                    value={searchPokemon}
                    onChange={(e) => filterPokemon(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Search Pokémon"
                    style={searchInputStyle}
                />
            </div>
        </header>
    );
};

export default SearchBar;