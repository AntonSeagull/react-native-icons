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

export const FcDecision = (props: IconProps) => {
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
        <Circle cx={38} cy={26} r={4} />
        <Circle cx={10} cy={26} r={4} />
        <Path d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z" />
        <Path d="M24 4C15.2 4 8 11.2 8 20v3.5l2.1.6V19l19.5-6.3 8.2 6.3v5.1l2.1-.6V20C40 12.5 34.6 4 24 4" />
        <Path fill="#0277BD" d="M21.8 29.6c0-6.6 5.1-6.2 5.1-10.2 0-1-.3-3-2.9-3-2.8 0-3 2.3-3 2.8h-3.8c0-1 .4-6 6.8-6 6.5 0 6.7 5.1 6.7 6 0 4.9-5.4 5.6-5.4 10.3h-3.5zm-.3 4.9c0-.3.1-2.1 2.1-2.1s2.2 1.8 2.2 2.1c0 .6-.3 2-2.2 2-1.8 0-2.1-1.4-2.1-2" />
      </G>
    </Svg>
  );
};