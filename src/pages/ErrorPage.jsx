const ErrorPage = () => {
  return (
    <>
      <section id="error-page" style={{ minHeight: "85vh" }}>
        <div className="error-wrapper">
          <div className="container">
            <h1 className="title">Error 404: Page Not Found</h1>
            <p className="description">
              The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
