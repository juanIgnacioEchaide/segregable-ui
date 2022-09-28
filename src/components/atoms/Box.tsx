import { BaseBoxProps } from "../../common/models/props";
import { Box } from "@chakra-ui/react";
import { SIZE } from "../../common/constants/media";

const BaseBox = ({
  children,
  w,
  h,
  bg,
  fs,
  column,
  row,
  rounded,
  p,
  pb,
  pt,
  pr,
  pl,
  m,
  mb,
  mt,
  mr,
  ml,
  primary,
  secondary,
  mode,
  alignCenter,
  alignStart,
  alignEnd,
  alignBaseLine,
  alignStrecht
}: BaseBoxProps) => {
  const positions = ["center", "flex-start", "flex-end", " baseline", "stretch"];

  const setFlexDir = (col: boolean | undefined, row: boolean | undefined) => {
    if (col && row) {
      return "column";
    } else {
      if (row) {
        return "row";
      }
    }
    return "column";
  };

  const setAlignItems = () => {
    if (alignCenter) return positions[0];
    if (alignStart) return positions[1];
    if (alignEnd) return positions[2];
    if (alignBaseLine) return positions[3];
    if (alignStrecht) return positions[4];
    return positions[0];
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: setFlexDir(column, row),
        background: bg ? bg : "none",
        alignItems: setAlignItems(),
        borderRadius: rounded ? "7px" : "0",
        padding: p ? p : "none",
        paddingTop: p ? p : "none",
        paddingBottom: pb ? pb : "none",
        paddingLeft: pl ? pl : "none",
        paddingRight: pr ? p : "none",
        margin: m ? m : "none",
        marginTop: mt ? mt : "none",
        marginBottom: mb ? mb : "none",
        marginLeft: ml ? ml : "none",
        marginRight: mr ? mr : "none",
        fontSize: `${fs?.toString()}px`,
        width: `${w?.toString()}vw`,
        height: `${h?.toString()}vh`,
      }}
    >
      {children}
    </div>
  );
};

export { BaseBox };
