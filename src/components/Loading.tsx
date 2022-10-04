export const Loading = () => {
  return (
    <div className="loading-map d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3>Espere por favor</h3>
        <div>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
            style={{ marginRight: "3px" }}
          ></span>
          Localizando...
        </div>
      </div>
    </div>
  );
};
