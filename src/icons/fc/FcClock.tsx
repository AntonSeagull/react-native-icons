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

export const FcClock = (props: IconProps) => {
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
        <Circle cx={24} cy={24} r={20} fill="#00ACC1" />
        <Circle cx={24} cy={24} r={16} fill="#eee" />
        <Path d="M23 11h2v13h-2z" />
        <Path d="M31.285 29.654 29.66 31.28l-6.504-6.504 1.626-1.627z" />
        <Circle cx={24} cy={24} r={2} />
        <Circle cx={24} cy={24} r={1} fill="#00ACC1" />
      </G>
    </Svg>
  );
};