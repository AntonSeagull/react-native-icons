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

export const PiDotsSixVertical = (props: IconProps) => {
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
        <Path d="M104 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12m60 12a12 12 0 1 0-12-12 12 12 0 0 0 12 12m-72 44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-72 68a12 12 0 1 0 12 12 12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};