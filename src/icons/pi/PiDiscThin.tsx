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

export const PiDiscThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m35.77 96a35.8 35.8 0 0 0-7.66-18.45l39.68-39.68A91.64 91.64 0 0 1 219.91 124Zm-7.77 4a28 28 0 1 1-28-28 28 28 0 0 1 28 28m-28 92a92 92 0 1 1 62.13-159.79l-39.68 39.68A36 36 0 1 0 163.77 132h56.14A92.11 92.11 0 0 1 128 220" />
      </G>
    </Svg>
  );
};