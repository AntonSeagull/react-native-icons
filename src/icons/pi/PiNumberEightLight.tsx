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

export const PiNumberEightLight = (props: IconProps) => {
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
        <Path d="M151.62 119.45a46 46 0 1 0-47.24 0 54 54 0 1 0 47.24 0M94 80a34 34 0 1 1 34 34 34 34 0 0 1-34-34m34 130a42 42 0 1 1 42-42 42 42 0 0 1-42 42" />
      </G>
    </Svg>
  );
};