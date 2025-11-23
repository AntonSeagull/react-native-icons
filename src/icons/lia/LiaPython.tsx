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

export const LiaPython = (props: IconProps) => {
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
        <Path d="M16 5c-4.988 0-5 2-5 2v4h6v1H7s-3-.46-3 5 3 5 3 5h3v-1.625A4.383 4.383 0 0 1 14.375 16h3.25c1.86 0 3.375-.516 3.375-2.375V7s-.012-2-5-2m-3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m9 4v2.625C22 16.035 20.035 17 17.625 17h-3.25A3.38 3.38 0 0 0 11 20.375V26s.063 2 5 2 5-2 5-2v-4h-6v-1h10s3 .504 3-5-3-5-3-5Zm-3 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
      </G>
    </Svg>
  );
};