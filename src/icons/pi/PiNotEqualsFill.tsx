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

export const PiNotEqualsFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 112a8 8 0 0 1 0 16h-73.37L78 197.27a8 8 0 0 1-12-10.54L89.37 160H72a8 8 0 0 1 0-16h31.37l28-32H72a8 8 0 0 1 0-16h73.37L178 58.73a8 8 0 1 1 12 10.54L166.63 96H184a8 8 0 0 1 0 16h-31.37l-28 32Z" />
      </G>
    </Svg>
  );
};