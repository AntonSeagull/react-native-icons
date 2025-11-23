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

export const LuSquareBottomDashedScissors = (props: IconProps) => {
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
        <Path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M10 22H8M16 22h-2" />
        <Circle cx={8} cy={8} r={2} />
        <Path d="M9.414 9.414 12 12M14.8 14.8 18 18" />
        <Circle cx={8} cy={16} r={2} />
        <Path d="m18 6-8.586 8.586" />
      </G>
    </Svg>
  );
};