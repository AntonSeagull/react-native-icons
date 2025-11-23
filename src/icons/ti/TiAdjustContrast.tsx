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

export const TiAdjustContrast = (props: IconProps) => {
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
        <Path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-11v10c2.757 0 5-2.243 5-5s-2.243-5-5-5" />
      </G>
    </Svg>
  );
};