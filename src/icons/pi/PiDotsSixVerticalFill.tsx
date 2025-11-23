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

export const PiDotsSixVerticalFill = (props: IconProps) => {
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
        <Path d="M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-92 184a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12m56 120a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};