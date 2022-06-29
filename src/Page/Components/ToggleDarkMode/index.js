
import react from "react";
import {
  useColorMode,
  HStack,
  Text,
  Switch,
} from "native-base";

// Color Switch Component
export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" position="absolute" top={0.5} left={0.5}>
      {/* <Text>Dark</Text> */}
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      {/* <Text>Light</Text> */}
    </HStack>
  );
}