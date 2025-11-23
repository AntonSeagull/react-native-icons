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

export const TbDropletsFilled = (props: IconProps) => {
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
        <Path d="M6 12.003c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L4.66 12.73A1.6 1.6 0 0 1 6 12.003M18 12.003c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11l2.098-3.227a1.6 1.6 0 0 1 1.34-.726M12 2.003c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L10.66 2.73A1.6 1.6 0 0 1 12 2.003" />
      </G>
    </Svg>
  );
};