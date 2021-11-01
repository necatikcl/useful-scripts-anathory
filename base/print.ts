declare type PrintType = "success" | "error" | "info";
const Logger = {
  colors: { error: "red", info: "blue", success: "green" },

  writeToConsole(type: PrintType, text: string) {
    let color = this.colors[type];
    console.log(
      `%c${type.toUpperCase()}` + ` %c${text}`,
      `color: white; background: ${color}; padding-left: 8px; margin-right: 5px`,
      "color: white"
    );
  },

  success(text: string) {
    this.writeToConsole("success", text);
  },
  info(text: string) {
    this.writeToConsole("info", text);
  },
  error(text: string) {
    this.writeToConsole("error", text);
  },
};

export default Logger;
