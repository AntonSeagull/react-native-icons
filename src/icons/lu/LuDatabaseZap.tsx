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

export const LuDatabaseZap = (props: IconProps) => {
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
        <Ellipse cx={12} cy={5} rx={9} ry={3} />
        <Path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3M21 12l-3 5h4l-3 5" />
        <Path d="M3 12a9 3 0 0 0 11.59 2.87" />
      </G>
    </Svg>
  );
};