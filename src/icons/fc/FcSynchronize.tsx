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

export const FcSynchronize = (props: IconProps) => {
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
        <Path fill="#FF6F00" d="m38.7 11.9-3.1 2.5c2.2 2.7 3.4 6.1 3.4 9.5 0 8.3-6.7 15-15 15-.9 0-1.9-.1-2.8-.3l-.7 3.9c1.2.2 2.4.3 3.5.3 10.5 0 19-8.5 19-19 0-4.2-1.5-8.5-4.3-11.9" />
        <Path fill="#FF6F02" d="m31 8 11.9 1.6-9.8 9.8z" />
        <Path fill="#FF6F00" d="M24 5C13.5 5 5 13.5 5 24c0 4.6 1.6 9 4.6 12.4l3-2.6C10.3 31.1 9 27.6 9 24c0-8.3 6.7-15 15-15 .9 0 1.9.1 2.8.3l.7-3.9C26.4 5.1 25.2 5 24 5" />
        <Path fill="#FF6F02" d="M17 40 5.1 38.4l9.8-9.8z" />
      </G>
    </Svg>
  );
};