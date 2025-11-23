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

export const PiMoonLight = (props: IconProps) => {
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
        <Path d="M232.13 143.64a6 6 0 0 0-6-1.49 90.07 90.07 0 0 1-112.27-112.3 6 6 0 0 0-7.49-7.48 102.88 102.88 0 0 0-51.89 36.31 102 102 0 0 0 142.84 142.84 102.88 102.88 0 0 0 36.31-51.89 6 6 0 0 0-1.5-5.99m-42 48.29a90 90 0 0 1-126-126 90.9 90.9 0 0 1 35.52-28.27 102.06 102.06 0 0 0 118.69 118.69 90.9 90.9 0 0 1-28.24 35.58Z" />
      </G>
    </Svg>
  );
};