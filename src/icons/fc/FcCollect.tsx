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

export const FcCollect = (props: IconProps) => {
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
        <Path d="M22 35h4v11h-4z" />
        <Path d="m24 29.6 7 8.4H17z" />
        <Path d="M22 2h4v11h-4z" />
        <Path d="M24 18.4 17 10h14z" />
        <Path d="M2 22h11v4H2z" />
        <Path d="M18.4 24 10 31V17z" />
        <Path d="M35 22h11v4H35z" />
        <Path d="m29.6 24 8.4-7v14z" />
        <Circle cx={24} cy={24} r={3} fill="#F44336" />
      </G>
    </Svg>
  );
};