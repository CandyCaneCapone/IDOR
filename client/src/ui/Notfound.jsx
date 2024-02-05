import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  const handleGoBackHomepage = function () {
    navigate("/", { replace: true });
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-indigo-600 mb-4 text-7xl tracking-tight font-extrabold font-SometypeMono lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold font-SometypeMono text-gray-900 md:text-4xl dark:text-indigo-600">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light font-SometypeMono text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            onClick={handleGoBackHomepage}
            className="inline-flex text-indigo-600 font-SometypeMono bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 cursor-pointer dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}

export default Notfound;