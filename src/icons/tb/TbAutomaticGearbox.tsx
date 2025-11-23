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

export const TbAutomaticGearbox = (props: IconProps) => {
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
        <Path d="M17 17v4h1a2 2 0 1 0 0-4zM17 11h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3M9 11h4" />
      </G>
    </Svg>
  );
};