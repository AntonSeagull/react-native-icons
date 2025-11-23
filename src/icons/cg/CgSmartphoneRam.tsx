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

export const CgSmartphoneRam = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M0 9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm3-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};