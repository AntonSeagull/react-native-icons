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

export const TbRadarOff = (props: IconProps) => {
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
        <Path d="M11.291 11.295A1 1 0 0 0 12 13v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.319A8.96 8.96 0 0 0 21 12h-5M16 9a5 5 0 0 0-5.063-1.88M8.471 8.467a5 5 0 0 0 .53 7.535" />
        <Path d="M20.486 9A9 9 0 0 0 7.961 3.968M5.644 5.643a9 9 0 0 0 3.36 14.852M3 3l18 18" />
      </G>
    </Svg>
  );
};