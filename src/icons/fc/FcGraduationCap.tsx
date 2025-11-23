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

export const FcGraduationCap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 20h30v13H9z" />
        <Ellipse cx={24} cy={33} rx={15} ry={6} />
        <Path fill="#78909C" d="M23.1 8.2.6 18.1c-.8.4-.8 1.5 0 1.9l22.5 9.9q.9.3 1.8 0L47.4 20c.8-.4.8-1.5 0-1.9L24.9 8.2q-.9-.45-1.8 0" />
        <Path d="m43.2 20.4-20-3.4c-.5-.1-1.1.3-1.2.8s.3 1.1.8 1.2L42 22.2V37c0 .6.4 1 1 1s1-.4 1-1V21.4c0-.5-.4-.9-.8-1" />
        <Circle cx={43} cy={37} r={2} />
        <Path d="M46 40c0 1.7-3 6-3 6s-3-4.3-3-6 1.3-3 3-3 3 1.3 3 3" />
      </G>
    </Svg>
  );
};