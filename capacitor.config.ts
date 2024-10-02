import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'alarma.robo.app',
  appName: 'alarma.robo.app',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchShowDuration: -100,
      launchFadeOutDuration: -100,
      backgroundColor: "#ffffffff",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;