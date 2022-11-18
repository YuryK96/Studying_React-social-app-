import preloader from "../../../assets/img/preloader.svg";

const Preloader = ({ isFetching }) => {
  return (
    <div>
      {isFetching ? (
        <div>
          {" "}
          <img src={preloader} />
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
