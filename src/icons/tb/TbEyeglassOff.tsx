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

export const TbEyeglassOff = (props: IconProps) => {
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
        <Path d="M5.536 5.546 3 14M16 4h2l3 10M10 16h4M19.426 19.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5q0 .236-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7zM3 3l18 18" />
      </G>
    </Svg>
  );
};