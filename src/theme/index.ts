import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E0F4FF",
      100: "#B3E0FF",
      200: "#80CCFF",
      300: "#4DB8FF",
      400: "#1A95FF",
      500: "#0065FF", // Trello blue button color
      600: "#0052CC", // darker shade for hover states
      700: "#0747A6",
      800: "#072B66",
      900: "#091E42",
    },
    blue: {
      50: "#F0F6FF", // light blue background
      100: "#DEEBFF",
      500: "#0052CC", // for links
    },
    purple: {
      400: "#9F8FEF",
    },
    orange: {
      400: "#FF9F30",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#172B4D", // Trello dark text color
    },
  },
  fonts: {
    heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "3px",
      },
      sizes: {
        md: {
          fontSize: "14px",
          px: 5,
          py: 2.5,
        },
        lg: {
          fontSize: "14px",
          px: 6,
          py: 3,
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        ghost: {
          color: 'gray.700',
          _hover: {
            bg: 'gray.100',
          },
        },
        outline: {
          borderColor: 'gray.300',
          color: 'gray.700',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.900',
        fontWeight: "600",
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.700',
      },
    },
    Link: {
      baseStyle: {
        fontWeight: "500",
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.500',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900',
      },
    },
  },
});

export default theme;