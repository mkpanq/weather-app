import { IDataDisplayData } from "../lib/interfaces";
import Conditions from "./data-display/Conditions";

const DataDisplay = ({ data, refetch }: IDataDisplayData) => {
  return <Conditions data={data} refetch={refetch} />;
};

export default DataDisplay;
