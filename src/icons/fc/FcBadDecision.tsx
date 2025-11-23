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

export const FcBadDecision = (props: IconProps) => {
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
        <Path fill="#F44336" d="M16 24h16v4H16z" />
      </G>
    </Svg>
  );
};