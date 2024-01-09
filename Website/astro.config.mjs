import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: node({
  //   mode: "standalone"
  // }),
  compressHTML: true,
  integrations: [tailwind({
    applyBaseStyles: false
  }), starlight({
    customCss: ['./src/styles/custom.css'],
    title: 'PersonalityAI',
    description: 'An API to talk to your favorite characters',
    favicon: "./src/assets/img/logo.png",
    logo: {
      src: './src/assets/img/logo.png'
    },
    lastUpdated: true,
    expressiveCode: {
      styleOverrides: {
        borderRadius: '0.5rem'
      },
      useDarkModeMediaQuery: true
    },
    // favicon: "/logo.png",
    // logo: {
    //   src: "/logo.png",
    // },
    sidebar: [{
      label: "Docs",
      collapsed: false,
      autogenerate: {
        directory: "api",
        collapsed: true
      }
    }, {
      label: "Endpoints",
      collapsed: false,
      autogenerate: {
        directory: "endpoints",
        collapsed: true
      }
    }, {
      label: "Examples",
      collapsed: false,
      autogenerate: {
        directory: "examples",
        collapsed: true
      }
    }]
  }), compress(), react()],
  image: {
    service: squooshImageService()
  },
  server: {
    port: 4321
  }
});
// ]