module.exports = {
    apps: [
      {
        name: "VenkatPM2",
        script: "npm",
        args: "start",
        instances: 2, // Specify the number of instances
        exec_mode: "cluster", // Run in cluster mode
      },
    ],
  };