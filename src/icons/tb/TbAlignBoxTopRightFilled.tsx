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

export const TbAlignBoxTopRightFilled = (props: IconProps) => {
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
        <Path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15 5a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 16 12V6l-.007-.117A1 1 0 0 0 15 5m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 19 10V6l-.007-.117A1 1 0 0 0 18 5m-6 0a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 13 8V6l-.007-.117A1 1 0 0 0 12 5" />
      </G>
    </Svg>
  );
};