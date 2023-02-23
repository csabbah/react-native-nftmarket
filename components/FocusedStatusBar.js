import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
const FocusedStatusBar = (props) => {
  // Are we currently focusing on the status bar?
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
