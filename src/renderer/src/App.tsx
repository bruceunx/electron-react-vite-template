import Versions from "./components/Versions";

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <p className="bg-base-100 text-primary">hello world</p>
      <Versions />
    </>
  );
}

export default App;
