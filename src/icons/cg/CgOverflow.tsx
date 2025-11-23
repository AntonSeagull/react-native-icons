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

export const CgOverflow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" d="M22 11a10 10 0 0 1-20 0z" opacity={0.2} />
        <Path fill="currentColor" d="M20 11a8 8 0 0 1-16 0z" opacity={0.3} />
        <Path fill="currentColor" d="M20 11a8 8 0 0 0-16 0z" />
      </G>
    </Svg>
  );
};