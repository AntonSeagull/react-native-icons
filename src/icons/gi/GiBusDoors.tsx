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

export const GiBusDoors = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M41 25v254h58.73l63.97 64H247V25zm224 0v318h83.3l64-64H471V25zM57 41h174v208H57zm224 0h174v208H281zM160 279h64v18h-64zm128 0h64v18h-64zM41 297v46h49.63l63.97 64h92.3v18h-99.7l-64.03-64H41v126h206V361h-90.7l-64.03-64zm378.7 0-64 64H265v126h206V361h-42.2l-64 64h-99.7v-18h92.3l64-64H471v-46z" />
      </G>
    </Svg>
  );
};