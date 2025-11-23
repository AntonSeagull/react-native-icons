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

export const LuFence = (props: IconProps) => {
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
        <Path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5ZM6 8h4M6 18h4M12 3l-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5ZM14 8h4M14 18h4M20 3l-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      </G>
    </Svg>
  );
};