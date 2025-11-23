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

export const LuTransgender = (props: IconProps) => {
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
        <Path d="M12 16v6M14 20h-4M18 2h4v4M2 2l7.17 7.17M2 5.355V2h3.357M22 2l-7.17 7.17M8 5 5 8" />
        <Circle cx={12} cy={12} r={4} />
      </G>
    </Svg>
  );
};