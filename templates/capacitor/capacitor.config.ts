import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "my.retroterm.app",
  appName: "Retro-term App",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
};

export default config;

