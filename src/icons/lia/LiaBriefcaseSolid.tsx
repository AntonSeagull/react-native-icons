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

export const LiaBriefcaseSolid = (props: IconProps) => {
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
        <Path d="M16 3c-1.863 0-3.398 1.277-3.844 3H3v20h26V6h-9.156c-.446-1.723-1.98-3-3.844-3m0 2c.809 0 1.43.387 1.75 1h-3.5c.32-.613.941-1 1.75-1M5 8h22v9H5Zm11 6c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M5 19h22v5H5Z" />
      </G>
    </Svg>
  );
};