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

export const RiExchangeCnyFill = (props: IconProps) => {
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
        <Path d="M5.378 4.513a9.96 9.96 0 0 1 6.627-2.51c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.793 5.715l-2.707-5.715h2.5A8 8 0 0 0 6.279 6.415zm13.253 14.98a9.96 9.96 0 0 1-6.626 2.51c-5.523 0-10-4.477-10-10 0-2.125.663-4.095 1.793-5.715l2.707 5.715h-2.5A8 8 0 0 0 17.73 17.59zm-5.626-5.955h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 8.417l1.415-1.414 2.12 2.121 2.122-2.121 1.414 1.414-2.12 2.121h2.585v2h-3z" />
      </G>
    </Svg>
  );
};