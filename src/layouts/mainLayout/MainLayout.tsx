// Third-Party => Bootstarp / Router
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// My-Components
import { Footer, Header } from "@components/index";
// Styles
import styles from "./styles.module.css";

const { container, wrapper } = styles;

const MainLayout = () => {
   return (
      <Container className={container}>
         <Header />
         <main className={wrapper}>
            <Outlet />
         </main>
         <Footer />
      </Container>
   );
};

export default MainLayout;
