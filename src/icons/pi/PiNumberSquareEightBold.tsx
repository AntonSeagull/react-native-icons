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

export const PiNumberSquareEightBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 152a40 40 0 1 0 67.6-28.91 36 36 0 1 0-55.2 0A39.87 39.87 0 0 0 88 152m40 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16m-12-68a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};