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

export const TbFileTypeHtml = (props: IconProps) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6M5 15v6M2 18h3M20 15v6h2M13 21v-6l2 3 2-3v6M7.5 15h3M9 15v6" />
      </G>
    </Svg>
  );
};