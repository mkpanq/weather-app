import { IQueryData } from "../lib/interfaces";

const DataDisplay = ({ isFetching, error, data, refetch }: IQueryData) => {
  return <div>{JSON.stringify(data)}</div>;
};

export default DataDisplay;
