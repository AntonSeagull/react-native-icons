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

export const PiGreaterThanOrEqualFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 152H80a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-64.35-104 32a8 8 0 1 1-4.7-15.3L156.8 112 77.65 87.65a8 8 0 0 1 4.7-15.3l104 32a8 8 0 0 1 0 15.3" />
      </G>
    </Svg>
  );
};