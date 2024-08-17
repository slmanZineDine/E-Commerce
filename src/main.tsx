// Bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
// React
import ReactDOM from "react-dom/client";
// My-components
import AppRouter from "@routes/AppRouter";
import ReduxProvider from "@redux/provider/ReduxProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <ReduxProvider>
      <AppRouter />
   </ReduxProvider>
);
