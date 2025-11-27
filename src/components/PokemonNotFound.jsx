import React from "react";

export default function PokemonNotFound() {
  const notFoundStyle = {
    // Consistent dark theme card background and border
    backgroundColor: '#1f2937', 
    border: '1px solid #374151',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    margin: '50px auto',
    maxWidth: '600px',

    // Original structure styles, updated for dark theme
    textAlign: "center",
    padding: "50px 20px",
    color: "#f3f4f6", // Light text for dark theme
    fontFamily: "Inter, sans-serif" // Consistent application font
  };

  const imageStyle = {
    width: "150px",
    opacity: 0.8, // Increased opacity for visibility on dark background
    marginBottom: "20px",
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))', // Optional: added drop shadow
  };
  
  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#f8fafc", // Very light color for heading
  };
  
  const paragraphStyle = {
    fontSize: "1rem",
    color: "#9ca3af", // Subtle light gray for description
  };

  return (
    <div style={notFoundStyle}>
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
        alt="Not Found"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/6b7280/ffffff?text=X"}}
        style={imageStyle}
      />

      <h2 style={headingStyle}>
        Pokémon Not Found
      </h2>

      <p style={paragraphStyle}>
        Try searching another name…
      </p>
    </div>
  );
}