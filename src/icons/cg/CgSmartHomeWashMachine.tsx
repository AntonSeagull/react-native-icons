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

export const CgSmartHomeWashMachine = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6 4h12a1 1 0 0 1 1 1v3H5V5a1 1 0 0 1 1-1m13 15v-9H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm7 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-4 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};