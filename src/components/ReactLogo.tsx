import reactLogo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <a className="logo-fmd" href="https://frandepaulo.com">
      <img
        src={reactLogo}
        alt="reactLogo"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "130px",
        }}
      />
    </a>
  );
};
