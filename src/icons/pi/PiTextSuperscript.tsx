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

export const PiTextSuperscript = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 144a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.55a16 16 0 1 0-27.86-15 8 8 0 0 1-15.09-5.33 32 32 0 1 1 55.74 29.92L208 136h32a8 8 0 0 1 8 8m-98.76-70a8 8 0 0 0-11.29.8L92 127.79l-45.95-53A8 8 0 0 0 34 85.24L81.41 140 34 194.76a8 8 0 0 0 12.1 10.48l46-53 45.95 53a8 8 0 1 0 12.1-10.48L102.59 140l47.46-54.76a8 8 0 0 0-.81-11.24" />
      </G>
    </Svg>
  );
};