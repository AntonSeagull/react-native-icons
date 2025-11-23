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

export const FcAlphabeticalSortingZa = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16.8 40h-5.3l-1.1 3H6.9l5.7-15.2h2.9L21.1 43h-3.2zm-4.6-2.7H16l-1.9-5.7zM12.4 17.7H20v2.5H8.4v-1.9L16 7.5H8.4V5h11.4v1.7z" />
        <Path fill="#546E7A" d="M38 33V5h-4v28h-6l8 10 8-10z" />
      </G>
    </Svg>
  );
};