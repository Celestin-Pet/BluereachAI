import MapView from "../components/MapView";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div>
      <h1>🌍 Blue Carbon Dashboard</h1>
      <WalletConnect />
      <MapView />
    </div>
  );
}
