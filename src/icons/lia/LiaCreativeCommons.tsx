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

export const LiaCreativeCommons = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m-4 6c-1.645 0-3 1.355-3 3v2c0 1.645 1.355 3 3 3s3-1.355 3-3h-2c0 .566-.434 1-1 1s-1-.434-1-1v-2c0-.566.434-1 1-1s1 .434 1 1h2c0-1.645-1.355-3-3-3m8 0c-1.645 0-3 1.355-3 3v2c0 1.645 1.355 3 3 3s3-1.355 3-3h-2c0 .566-.434 1-1 1s-1-.434-1-1v-2c0-.566.434-1 1-1s1 .434 1 1h2c0-1.645-1.355-3-3-3" />
      </G>
    </Svg>
  );
};