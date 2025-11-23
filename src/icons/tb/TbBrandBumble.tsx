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

export const TbBrandBumble = (props: IconProps) => {
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
        <Path d="M7 12h10M9 8h6M10 16h4M16.268 3H7.732a1.46 1.46 0 0 0-1.268.748l-4.268 7.509a1.51 1.51 0 0 0 0 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 0 0 1.268-.748l4.268-7.509a1.51 1.51 0 0 0 0-1.486l-4.268-7.509A1.46 1.46 0 0 0 16.268 3" />
      </G>
    </Svg>
  );
};