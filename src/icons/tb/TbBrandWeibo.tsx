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

export const TbBrandWeibo = (props: IconProps) => {
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
        <Path d="M19 14.127C19 17.2 15.498 20 11 20c-4.126 0-8-2.224-8-5.565 0-1.78.984-3.737 2.7-5.567 2.362-2.51 5.193-3.687 6.551-2.238.415.44.752 1.39.749 2.062 2-1.615 4.308.387 3.5 2.693 1.26.557 2.5.538 2.5 2.742M15 4h1a5 5 0 0 1 5 5v1" />
      </G>
    </Svg>
  );
};