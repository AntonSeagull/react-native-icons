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

export const LiaGrinHearts = (props: IconProps) => {
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
        <Path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6m-5.5 5A1.5 1.5 0 0 0 9 12.5c0 .094.008.184.031.281.043.239.14.442.281.625C10.063 14.7 12 16 12 16s3-1.906 3-3.5a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0-1.5-1.5m8 0a1.5 1.5 0 0 0-1.5 1.5c0 .094.008.184.031.281.043.239.14.442.282.625C18.063 14.7 20 16 20 16s1.988-1.29 2.719-2.625c.16-.297.281-.586.281-.875a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0-1.5-1.5m-7.687 8-1.72 1c1.384 2.387 3.954 4 6.907 4s5.523-1.613 6.906-4l-1.718-1A5.98 5.98 0 0 1 16 22a5.98 5.98 0 0 1-5.187-3" />
      </G>
    </Svg>
  );
};