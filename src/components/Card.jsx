import React from "react";

const Card = ({ name, type, height, weight, speed, experience, attack, abilities, imageUrl, background }) => {
  // Convert "Grass, Poison" → ["Grass", "Poison"]
  const types = type.split(",").map((t) => t.trim().toLowerCase()); // Convert to lowercase for map lookup

  // --- LOGIC: Type-to-color mapping (unchanged) ---
  const typeColors = {
    grass: "#7AC74C",
    poison: "#A33EA1",
    water: "#6390F0",
    fire: "#EE8130",
    electric: "#F7D02C",
    normal: "#A8A77A",
    flying: "#A98FF3",
    bug: "#A6B91A", // Adjusted bug color for better visibility
    fighting: "#C22E28", // Adjusted fighting color
  };

  // Get color for each type
  const getTypeColor = (t) => typeColors[t] || "#6b7280";
  // --------------------------------------------------

  // --- DARK THEME STYLES ---

  // Base card styling
  const cardStyle = {
    maxWidth: "350px",
    width: "90%",
    margin: "30px auto",
    padding: "20px 0",
    borderRadius: "15px",
    // Subtle, modern dark shadow
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)", 
    textAlign: "center",
    fontFamily: "Inter, sans-serif", // Modern font
    backgroundColor: "#1f2937", // Dark Slate background
    border: "1px solid #374151", // Subtle dark border
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };
  
  // Hover effect for interaction (optional but modern)
  const handleHover = (e, isHovering) => {
      e.currentTarget.style.transform = isHovering ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = isHovering ? '0 15px 30px rgba(0, 0, 0, 0.7)' : '0 10px 25px rgba(0, 0, 0, 0.5)';
  };

  // Image container
  const imageContainerStyle = {
    // Darker, less distracting background for the image area
    background: background || "linear-gradient(to top, #374151, #4b5563)",
    borderRadius: "100%",
    width: "200px",
    height: "200px",
    margin: "0 auto 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.4)", // Inner shadow for depth
  };

  // Name style
  const nameStyle = {
    fontSize: "2.5em",
    fontWeight: "800",
    marginBottom: "15px",
    color: "#e5e7eb", // Light gray/off-white for contrast
    letterSpacing: "1px",
  };

  // Type Pills container
  const typeContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "30px",
  };

  // Individual Type Pill style
  const typePillStyle = (typeColor) => ({
    backgroundColor: typeColor,
    color: "#fff", // White text on color background
    padding: "6px 14px", // Slightly smaller padding
    borderRadius: "20px",
    fontSize: "0.85em",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Stronger pill shadow
  });

  // Stats Grid
  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "0 25px",
    borderTop: "1px solid #374151", // Separator line
    paddingTop: "20px",
  };

  // Stat Value
  const statValueStyle = {
    fontSize: "1.5em",
    fontWeight: "800",
    color: "#f3f4f6", // Bright white for numbers
    marginBottom: "3px",
  };

  // Stat Label
  const statLabelStyle = {
    fontSize: "0.8em",
    color: "#9ca3af", // Muted gray for labels
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };
  
  // --- END DARK THEME STYLES ---

  return (
    <div 
        style={cardStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
    >
      {/* Image container */}
      <div style={imageContainerStyle}>
        <img
          src={imageUrl}
          alt={name}
          // Increased image size within the circle for better visibility
          style={{ width: "70%", height: "auto", objectFit: "contain", paddingBottom: "0" }} 
        />
      </div>

      {/* Name */}
      <div style={nameStyle}>
        {name}
      </div>

      {/* Type Pills */}
      <div style={typeContainerStyle}>
        {types.map((t, index) => (
          <div
            key={index}
            style={typePillStyle(getTypeColor(t))}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div style={statsGridStyle}>
        {/* Height */}
        <div style={{ padding: "10px 0" }}>
          <div style={statValueStyle} >
            {height}
          </div>
          <div style={statLabelStyle} >
            Height
          </div>
        </div>

        {/* Weight */}
        <div style={{ padding: "10px 0" }}>
          <div style={statValueStyle} >
            {weight}
          </div>
          <div style={statLabelStyle} >
            Weight
          </div>
        </div>

        {/* Speed */}
        <div style={{ padding: "10px 0" }}>
          <div style={statValueStyle} >
            {speed}
          </div>
          <div style={statLabelStyle} >
            Speed
          </div>
        </div>

        {/* Experience */}
        <div style={{ padding: "10px 0" }}>
          <div style={statValueStyle} >
            {experience}
          </div>
          <div style={statLabelStyle} >
            Experience
          </div>
        </div>

        {/* Attack */}
        <div style={{ padding: "10px 0" }}>
          <div style={statValueStyle} >
            {attack}
          </div>
          <div style={statLabelStyle} >
            Attack
          </div>
        </div>

        {/* Abilities */}
        {/* Adjusted padding/size since abilities text might be longer */}
        <div style={{ padding: "10px 0" }}>
          <div style={{ ...statValueStyle, fontSize: "1.1em" }} > 
            {abilities}
          </div>
          <div style={statLabelStyle} >
            Abilities
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;