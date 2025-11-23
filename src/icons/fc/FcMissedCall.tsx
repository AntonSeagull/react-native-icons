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

export const FcMissedCall = (props: IconProps) => {
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
        <Path d="M30.3 12.9 24 19.2l-8.3-8.3-2.8 2.8L24 24.8l9.1-9.1z" />
        <Path d="m36 19-9-9h9z" />
        <Path fill="#009688" d="m44.5 30.8-2.4-2.4c-8.5-8.3-28.9-7.1-36.2 0l-2.4 2.4c-.7.7-.7 1.7 0 2.4l4.8 4.7c.7.7 1.7.7 2.4 0l5.3-5.1-.4-5.6c1.7-1.7 15.1-1.7 16.8 0l-.3 5.8 5.1 4.9c.7.7 1.7.7 2.4 0l4.8-4.7c.8-.7.8-1.8.1-2.4" />
      </G>
    </Svg>
  );
};