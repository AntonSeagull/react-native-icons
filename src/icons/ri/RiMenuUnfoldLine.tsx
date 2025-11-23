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

export const RiMenuUnfoldLine = (props: IconProps) => {
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
        <Path d="M21 18v2H3v-2zM17.404 3.903 22 8.5l-4.596 4.596-1.414-1.415L19.172 8.5 15.99 5.318zM12 11v2H3v-2zm0-7v2H3V4z" />
      </G>
    </Svg>
  );
};