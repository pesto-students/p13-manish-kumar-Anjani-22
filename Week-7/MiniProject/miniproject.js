document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("loading-animation");

    const animationOptions = {
      container: container,
      renderer: "svg", // or "canvas" or "html"
      loop: true,
      autoplay: true,
      path: "https://lottie.host/9ca5789d-376e-4088-93e0-99308786b1a1/w1u6AuAgmV.json"
      
    };

    const animation = lottie.loadAnimation(animationOptions);

    animation.addEventListener("complete", function () {
      // Animation is complete, you can hide the loading screen or perform other actions.
      console.log("Animation complete");
    });
  });
