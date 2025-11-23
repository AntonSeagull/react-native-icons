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

export const TbCurrencyDollarOff = (props: IconProps) => {
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
        <Path d="M16.7 8A3 3 0 0 0 14 6h-4M7.443 7.431A3 3 0 0 0 10 12h2m4.564 4.558A3 3 0 0 1 14 18h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3M3 3l18 18" />
      </G>
    </Svg>
  );
};