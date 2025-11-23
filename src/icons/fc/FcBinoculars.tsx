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

export const FcBinoculars = (props: IconProps) => {
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
        <Circle cx={33} cy={16} r={6} />
        <Circle cx={15} cy={16} r={6} />
        <Path d="m46.7 25-15.3 3H16.7L1.4 25l4.3-7.9C6.8 15.2 8.8 14 11 14h26.2c2.2 0 4.2 1.2 5.3 3.1z" />
        <Circle cx={38} cy={30} r={10} />
        <Circle cx={10} cy={30} r={10} />
        <Circle cx={24} cy={28} r={5} />
        <Circle cx={24} cy={28} r={2} fill="#546E7A" />
        <Circle cx={38} cy={30} r={7} />
        <Circle cx={10} cy={30} r={7} />
        <Path d="M41.7 27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M10 26c-1.4 0-2.8.6-3.7 1.7-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 .1-1.4-1-1-2.4-1.6-3.8-1.6" />
      </G>
    </Svg>
  );
};