import { BaseBoxProps } from "../../common/models/props";
import { useCallback } from "react";

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
  alignStrecht,
  placeItems,
  justifyStart,
  justifyend,
  justifycenter,
  justifySpaceBetween,
  justifySpaceAround,
  justifySpaceEvenly,
}: BaseBoxProps) => {
  const none = "none";

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

  const setAlignItems = useCallback(() => {
    const positions = [
      "center",
      "flex-start",
      "flex-end",
      " baseline",
      "stretch",
    ];
    if (alignCenter) return positions[0];
    if (alignStart) return positions[1];
    if (alignEnd) return positions[2];
    if (alignBaseLine) return positions[3];
    if (alignStrecht) return positions[4];
    return positions[0];
  }, [alignBaseLine, alignCenter, alignEnd, alignStart, alignStrecht]);

  const setJustifyContent = useCallback(() => {
    const justifications = [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ];
    if (justifyStart) return justifications[0];
    if (justifyend) return justifications[1];
    if (justifycenter) return justifications[2];
    if (justifySpaceBetween) return justifications[3];
    if (justifySpaceAround) return justifications[4];
    if (justifySpaceEvenly) return justifications[5];
    return justifications[0];
  }, [
    justifySpaceAround,
    justifySpaceBetween,
    justifySpaceEvenly,
    justifyStart,
    justifycenter,
    justifyend,
  ]);

  const px = (val: any) => {
    return `${val?.toString()}px`;
  };

  return (
    <div
      style={{
        display: "flex",
        width: `${w?.toString()}vw`,
        height: `${h?.toString()}vh`,
        flexDirection: setFlexDir(column, row),
        placeItems: placeItems ? placeItems : none,
        justifyContent: setJustifyContent(),
        alignItems: setAlignItems(),
        background: bg ? bg : none,
        borderRadius: rounded ? "7px" : none,
        padding: p ? px(p) : none,
        paddingTop: pt ? px(pt) : none,
        paddingBottom: pb ? px(pb) : none,
        paddingLeft: pl ? px(pl) : none,
        paddingRight: pr ? px(p) : none,
        margin: m ? px(m) : none,
        marginTop: mt ? px(mt) : none,
        marginBottom: mb ? px(mb) : none,
        marginLeft: ml ? px(ml) : none,
        marginRight: mr ? px(mr) : none,
        fontSize: px(fs),
      }}
    >
      {children}
    </div>
  );
};

export { BaseBox };
