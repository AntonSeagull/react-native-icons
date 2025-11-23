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

export const PiShoppingBagOpenThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4m-44-92a44 44 0 0 1-88 0 4 4 0 0 1 8 0 36 36 0 0 0 72 0 4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};