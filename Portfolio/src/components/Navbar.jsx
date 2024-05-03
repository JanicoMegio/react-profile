import React, { useEffect } from "react"
function Navbar (){
    useEffect(() => {
        const toggleButtonColors = () => {
          const sections = document.querySelectorAll("section");
          const links = document.querySelectorAll("nav a");
    
          sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
              links[index].classList.add("active");
            } else {
              links[index].classList.remove("active");
            }
          });
        };
    
        // Initial call
        toggleButtonColors();
    
        // Listen for scroll events
        const scrollListener = () => toggleButtonColors();
        window.addEventListener("scroll", scrollListener);
    
        // Cleanup
        return () => {
          window.removeEventListener("scroll", scrollListener);
        };
      }, []);

    return null;
}

export default Navbar