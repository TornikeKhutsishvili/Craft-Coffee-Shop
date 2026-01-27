import styles from "../styles/errorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <section id="error-page" style={{ minHeight: "90vh" }}>
        <div className={styles.errorWrapper}>
          <h1 className={styles.title}>Error 404: Page Not Found</h1>
          <p className={styles.description}>
            The page you are looking for does not exist.
          </p>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
