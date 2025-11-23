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

export const BiJoystickAlt = (props: IconProps) => {
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
        <Circle cx={15} cy={13} r={1} />
        <Circle cx={17} cy={11} r={1} />
        <Path d="M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z" />
        <Path d="M15 5H9a7 7 0 0 0-7 7 7 7 0 0 0 7 7h6a7 7 0 0 0 7-7 7 7 0 0 0-7-7m0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10" />
      </G>
    </Svg>
  );
};