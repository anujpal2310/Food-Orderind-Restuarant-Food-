import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="bg-yellow-50 h-[100vh] flex flex-col items-center">
      <h1 className="font-bold mb-5 mt-10">Error page</h1>
      <h3>OOPS!! something went wrong....</h3>
      <p>status:{err.status}</p>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
