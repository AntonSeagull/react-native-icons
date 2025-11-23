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

export const TbFileTypeTxt = (props: IconProps) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4M16.5 15h3" />
        <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6M18 15v6M10 15l4 6M10 21l4-6" />
      </G>
    </Svg>
  );
};