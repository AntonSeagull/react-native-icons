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

export const SiOpenmined = (props: IconProps) => {
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
        <Path d="M12 0a1.43 1.43 0 0 0-1.25.725L7.082 7.082.725 10.75a1.44 1.44 0 0 0 0 2.5l6.357 3.668 3.668 6.357a1.44 1.44 0 0 0 2.5 0l3.668-6.357 6.357-3.668c.967-.544.967-1.945 0-2.5l-6.357-3.668L13.25.725A1.43 1.43 0 0 0 12 0m.006 4.237 7.757 7.769-7.769 7.757-7.757-7.757zm-.012 3.112-4.656 4.657 4.656 4.656 4.657-4.656z" />
      </G>
    </Svg>
  );
};