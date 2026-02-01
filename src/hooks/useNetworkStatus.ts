import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
export default function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(Boolean(state.isConnected));
      return () => unSubscribe();
    });
  }, []);
  return isConnected;
}
