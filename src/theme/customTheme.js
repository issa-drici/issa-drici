import { extendTheme } from "@chakra-ui/react";

const colors = {
  // Go to https://smart-swatch.netlify.com/ to easily generate a new color palette.
  brand: {
    bleuElectrique: "#7367f0",
    grisClair: "##f5f5f5",
    grisBackground: "#f8f8f8",
  },
};

const shadows = {
  bleuElectrique: "0 0 10px 1px rgba(115,103,240, 0.7)",
};

const Text = {
  baseStyle: {
    color: "gray.600",
  },
};

export const customTheme = extendTheme({
  components: {
    Text,
  },
  colors,
  shadows,
});
