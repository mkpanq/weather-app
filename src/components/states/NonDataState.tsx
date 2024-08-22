import { NON_DATA_STATE_INFO } from "../../lib/config";
import { NonDataStateType } from "../../lib/types";

const NonDataState = ({
  state,
  additionalInfo,
}: {
  state: NonDataStateType;
  additionalInfo?: string;
}) => {
  const data = NON_DATA_STATE_INFO[state];

  return (
    <div className={`w-full text-center ${data.color} md:text-2xl md:py-10`}>
      <p>{additionalInfo ?? data.defaultInfo}</p>
      <span className={`${data.icon} text-6xl`} />
    </div>
  );
};

export default NonDataState;
