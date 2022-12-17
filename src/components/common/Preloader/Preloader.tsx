import preloader from "../../../assets/img/preloader.svg";

const Preloader: React.FC = ({}) => {
  return (
    <div>
      <div>
        {" "}
        <img src={preloader} />
      </div>
    </div>
  );
};

export default Preloader;
