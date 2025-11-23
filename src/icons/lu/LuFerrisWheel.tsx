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

export const LuFerrisWheel = (props: IconProps) => {
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
        <Circle cx={12} cy={12} r={2} />
        <Path d="M12 2v4M6.8 15l-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7M20.7 17l-3.5-2M9 22l3-8 3 8M8 22h8" />
        <Path d="M18 18.7a9 9 0 1 0-12 0" />
      </G>
    </Svg>
  );
};