
import { useState } from "react";
import UseQueryContext from "../../hooks/UseQueryContext";
import { VIEW } from "../../common/constants/uri";

const TopBanner = ({ isOpen, onOpen, onClose }: any): JSX.Element => {
  const handleOpen = () => {
    return !isOpen ? onOpen() : onClose();
  };
  const [viewTitle, setViewTitle] = useState<VIEW>(VIEW.DEFAULT);
  const { view } = UseQueryContext();

  return <div>banner</div>;
};

export { TopBanner };
