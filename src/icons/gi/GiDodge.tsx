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

export const GiDodge = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M465.074 481.646c-24.928 1.186-334.495-.667-334.495-.667-188.07-188.857 283.16-251.37-8.1-406.484l-20.382 21.487-27.14-71.216 87.582 6.818-17.534 19.7c364.276 106.15-48.98 305.105 320.068 430.36z" />
      </G>
    </Svg>
  );
};