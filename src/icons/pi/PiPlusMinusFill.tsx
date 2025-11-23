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

export const PiPlusMinusFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1-8-8m24 96a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 11.32l-96 96A8 8 0 0 1 80 192m112-8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};