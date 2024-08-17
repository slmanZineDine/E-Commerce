// Third-Party ====> Bootstrap
import { Container } from "react-bootstrap";
// Third-Party ====> React-Router
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
// Data
import { paths } from "@routes/paths";

const Error = () => {
   const error = useRouteError();
   let errorStatus: number;
   let errorStatusText: string;

   if (isRouteErrorResponse(error)) {
      errorStatus = error.status;
      errorStatusText = error.statusText;
   } else {
      errorStatus = 404;
      errorStatusText = "Page Not Found";
   }

   return (
      <Container className="notFound">
         <h1>{errorStatus}</h1>
         <p>{errorStatusText}</p>
         <Link to={paths.home} replace={true}>
            How about going back to safety?
         </Link>
      </Container>
   );
};

export default Error;
