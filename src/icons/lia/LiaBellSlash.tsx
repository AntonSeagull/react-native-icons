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

export const LiaBellSlash = (props: IconProps) => {
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
        <Path d="M3.719 2.281 2.28 3.72l26 26 1.438-1.438L26 24.563V23h-1c-.55 0-1-.45-1-1v-8.719c0-3.828-2.582-7.078-6.031-8C17.98 5.188 18 5.098 18 5a1.999 1.999 0 1 0-4 0c0 .086.02.168.031.25a7.94 7.94 0 0 0-3.594 2c-.3.29-.566.613-.812.938ZM15.563 7a6 6 0 0 1 .624 0C19.396 7.098 22 9.91 22 13.281v7.281L11.063 9.626c.222-.328.457-.656.75-.937 1.027-1 2.34-1.59 3.75-1.688M8.03 12.25A8 8 0 0 0 8 13v9c0 .55-.45 1-1 1H6v2h7.188A3 3 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.187-1h2l-2-2h-9c.113-.312.187-.648.187-1v-7.812ZM16 25c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1" />
      </G>
    </Svg>
  );
};