import "./App.css";
import { Button } from '@mui/material';
import BasicTable from "./components/table"
function App() {
  return (
    <>
      <div> hello world </div>
      <BasicTable/>
      <Button variant="contained" color="success">
        Success
      </Button>
    </>
  );
}

export default App;
