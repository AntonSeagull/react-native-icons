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

export const RiFirebaseLine = (props: IconProps) => {
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
        <Path d="m9.223 8.707-2.312 4.334 1.09-6.715zm1.145-2.148L7.695 1.353a.5.5 0 0 0-.938.148L4 18.5l1.748 1.093 5.192 3.244a2 2 0 0 0 2.12 0L20 18.5 18.142 5.961a.5.5 0 0 0-.841-.287l-2.735 2.637-2.125-3.984a.5.5 0 0 0-.882 0zm2.701 3.196L8.667 14 12 7.75zm-5.837 8.407 9.36-9.025 1.238 8.36L12 21.143z" />
      </G>
    </Svg>
  );
};