// React
import { ReactNode } from "react";
// Third-Party ===> Redux
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
   children?: ReactNode;
}

const ReduxProvider = ({ children }: Props) => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            {children}
         </PersistGate>
      </Provider>
   );
};

export default ReduxProvider;
