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

export const SiKyocera = (props: IconProps) => {
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
        <Path d="M9.677 4.645 2.323 12V4.645zm-7.354 14.71h7.355L2.323 12zm7.354 0L17.032 12 9.677 4.645zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355z" />
      </G>
    </Svg>
  );
};