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

export const VscReactions = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M12 7.5q0 .254-.027.5h1.005A5.5 5.5 0 1 0 8 12.978v-1.005A4.5 4.5 0 1 1 12 7.5M5.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2 2.5c.712 0 1.355-.298 1.81-.776l.707.708A3.5 3.5 0 0 1 7.5 10.5a3.5 3.5 0 0 1-2.555-1.108l.707-.708A2.5 2.5 0 0 0 7.5 9.5m2-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2.5 3h1v2h2v1h-2v2h-1v-2h-2v-1h2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};