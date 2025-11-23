import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const TbArrowBigLeftLineFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.586 4 3 10.586a2 2 0 0 0 0 2.828L9.586 20a2 2 0 0 0 2.18.434l.145-.068A2 2 0 0 0 13 18.586V16h5a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 18 8l-5-.001V5.414A2 2 0 0 0 9.586 4" />
        <Path d="M4.415 12 11 5.414V9l.007.117A1 1 0 0 0 12 10l5-.001v4L12 14a1 1 0 0 0-1 1v3.586zM21 8a1 1 0 0 1 .993.883L22 9v6a1 1 0 0 1-1.993.117L20 15V9a1 1 0 0 1 1-1" />
      </G>
    </Svg>
  );
};