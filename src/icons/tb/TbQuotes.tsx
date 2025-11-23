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

export const TbQuotes = (props: IconProps) => {
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
        <Path d="M4 12c-1.333-1.854-1.333-4.146 0-6M8 12c-1.333-1.854-1.333-4.146 0-6M16 18c1.333-1.854 1.333-4.146 0-6M20 18c1.333-1.854 1.333-4.146 0-6" />
      </G>
    </Svg>
  );
};