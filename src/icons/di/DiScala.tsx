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

export const DiScala = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M8.573 7.307s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961zm.063 7.922s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961zm0 7.922s14.853-1.485 14.853-3.961v5.941s0 2.476-14.853 3.961z" />
      </G>
    </Svg>
  );
};