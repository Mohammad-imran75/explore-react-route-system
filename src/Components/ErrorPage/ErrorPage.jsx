import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2 className="text-3xl">Ooops!!!</h2>
        </div>
    );
};

export default ErrorPage;