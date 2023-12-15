import InfoIcon from "../../assets/svgs/InfoIcon";
import Container from "./Container";

const Error = ({ error = "" }) => {
  return (
    <Container>
      <div
        className="flex items-center p-3 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
        role="alert"
      >
        <InfoIcon />
        <span className="sr-only">Info</span>
        <div className="font-medium">{error.toString()}</div>
      </div>
    </Container>
  );
};

export default Error;
