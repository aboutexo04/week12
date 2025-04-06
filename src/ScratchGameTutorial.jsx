import { useState } from "react";

const steps = [
  { 
    title: "Week 11 - Function art",
    description: "Today, we'll create art work using functions in Scratch!",
    images: ["images/first.png"] // Removed leading slash
  },
  {
    title: "Seating Chart",
    description: "Please check your seat and make sure you're in the right place.",
    images: ["images/seating-chart.png"] // Removed leading slash
  },
  {
    title: "Key programming concepts",
    description: "Today, we'll cover functions, very important concept in most programming languages.",
    images: ["images/functions.png"] // Removed leading slash
  },
  
  {
    title: "Step 1: Open Scratch and remix today's start project(week11)",
    description: "Please share the start file I provided at the studio Week11. My Stuff -> My Studio -> Week11 -> Start File",
  },
  {
    title: "Step 2: Let's start coding with basic structure",
    description: "As you can see, drawing starts with a space key, and it stops with a 'c' key.",
    images: ["images/basic.png"] // Removed leading slash
  },
  {
    title: "Step 3: Defining function in Scratch",
    description: "In Scratch, we can define a function by clicking on 'Make a block' and give it a name. This allows us to create reusable code blocks that can be called multiple times.",
    images: ["images/makeablock.png", "images/blockname.png"] // Removed leading slashes
  },
  {
    title: "Step 4: Let's create one drawing function",
    description: "Let's create one drawing functions.",
    images: ["images/centered.png"] // Removed leading slash
  },
  {
    title: "Step 5: Let's create one more drawing function to make our art more interesting",
    images: ["images/rotation.png"] // Removed leading slash
  },
  {
    title: "Step 6: Test your drawing and share the project to the studio week11",
    description: "Dont forget to add your project to the studio week11.",
  },
];

export default function ScratchGameTutorial() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  // Function to handle image errors and provide fallback
  const handleImageError = (e) => {
    console.log("Image failed to load:", e.target.src);
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
  };

  return (
    <div style={styles.container}>
      <div style={styles.progressBarWrapper}>
        <div style={{ ...styles.progressBar, width: `${((stepIndex + 1) / steps.length) * 100}%` }} />
      </div>
      <div style={styles.card}>
        <h2 style={styles.title}>{step.title}</h2>
        <p style={styles.description}>{step.description}</p>
        
        {/* Multiple images display section - vertical stack only */}
        {step.images && step.images.length > 0 && (
          <div style={styles.imagesContainer}>
            {step.images.map((image, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={`${import.meta.env.BASE_URL}${image}`}
                  alt={`${step.title} - image ${index + 1}`}
                  style={styles.image}
                  onError={handleImageError}
                />
              </div>
            ))}
          </div>
        )}
        
        <div style={styles.buttonRow}>
          <button
            onClick={() => setStepIndex(stepIndex - 1)}
            disabled={stepIndex === 0}
            style={{ ...styles.button, ...(stepIndex === 0 ? styles.disabledButton : {}) }}
          >
            ◀ Previous
          </button>
          <button
            onClick={() => setStepIndex(stepIndex + 1)}
            disabled={stepIndex === steps.length - 1}
            style={{ ...styles.button, ...(stepIndex === steps.length - 1 ? styles.disabledButton : {}) }}
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarWrapper: {
    height: "10px",
    width: "100%",
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "1rem"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1e88e5",
    transition: "width 0.3s ease"
  },
  container: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    padding: "1rem",
    marginTop: "2rem",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f0f8ff",
    borderRadius: "24px",
    border: "2px solid #90caf9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1e88e5",
    marginBottom: "1rem"
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333"
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginBottom: "1.5rem"
  },
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    border: "2px solid #90caf9"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#64b5f6",
    color: "white",
    border: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    cursor: "pointer"
  },
  disabledButton: {
    backgroundColor: "#bbdefb",
    cursor: "not-allowed"
  }
};