document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("loading-animation");

    const animationOptions = {
      container: container,
      renderer: "svg", // or "canvas" or "html"
      loop: true,
      autoplay: true,
      path: "./data.json", // Replace with your JSON file path
    };

    const animation = lottie.loadAnimation(animationOptions);

    animation.addEventListener("complete", function () {
      // Animation is complete, you can hide the loading screen or perform other actions.
      console.log("Animation complete");
    });
  });
