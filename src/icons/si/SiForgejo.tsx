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

export const SiForgejo = (props: IconProps) => {
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
        <Path d="M16.777 0a2.9 2.9 0 1 1-2.529 4.322H12.91a4.266 4.266 0 0 0-4.265 4.195v2.118a7.08 7.08 0 0 1 4.147-1.42l.118-.002h1.338a2.9 2.9 0 0 1 5.43 1.422 2.9 2.9 0 0 1-5.43 1.422H12.91a4.266 4.266 0 0 0-4.265 4.195v2.319A2.9 2.9 0 0 1 7.222 24 2.9 2.9 0 0 1 5.8 18.57V8.589a7.11 7.11 0 0 1 6.991-7.108l.118-.001h1.338A2.9 2.9 0 0 1 16.778 0M7.223 19.905a1.194 1.194 0 1 0 0 2.389 1.194 1.194 0 0 0 0-2.389m9.554-10.464a1.194 1.194 0 1 0 0 2.389 1.194 1.194 0 0 0 0-2.39m0-7.735a1.194 1.194 0 1 0 0 2.389 1.194 1.194 0 0 0 0-2.389" />
      </G>
    </Svg>
  );
};