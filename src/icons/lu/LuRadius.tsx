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

export const LuRadius = (props: IconProps) => {
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
        <Path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
        <Circle cx={19} cy={19} r={2} />
        <Path d="m13.41 13.41 4.18 4.18" />
        <Circle cx={12} cy={12} r={2} />
      </G>
    </Svg>
  );
};