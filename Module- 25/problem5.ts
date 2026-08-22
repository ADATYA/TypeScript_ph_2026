type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
  switch (light) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
  }
}