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

export const SiFlat = (props: IconProps) => {
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
        <Path d="M6.546 17.455v3.272a3.273 3.273 0 1 1-3.273-3.273Zm8.727-8.728V12A3.273 3.273 0 0 1 12 15.273H5.455a3.273 3.273 0 0 1 0-6.546zM24 0v3.273a3.273 3.273 0 0 1-3.273 3.273H7.637a3.273 3.273 0 0 1 0-6.546Z" />
      </G>
    </Svg>
  );
};