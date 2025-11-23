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

export const Immbleupon = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 5c-.55 0-1 .45-1 1v4c0 1.653-1.347 3-3 3s-3-1.347-3-3V8h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-1.653 1.347-3 3-3s3 1.347 3 2.781v.969l-1.281.375L9 6.75v-.969C9 5.45 8.55 5 8 5" />
        <Path d="M15 10c0 1.653-1.347 3-3 3s-3-1.347-3-3.219V7.843l.719.375L11 7.843v1.938c0 .769.45 1.219 1 1.219s1-.45 1-1V8h2z" />
      </G>
    </Svg>
  );
};