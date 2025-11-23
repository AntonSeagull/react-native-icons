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

export const PiAnchorSimpleLight = (props: IconProps) => {
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
        <Path d="M224 114h-24a6 6 0 0 0 0 12h17.8a90.13 90.13 0 0 1-83.8 83.78V93.4a30 30 0 1 0-12 0v116.38A90.13 90.13 0 0 1 38.2 126H56a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6 102 102 0 0 0 204 0 6 6 0 0 0-6-6M110 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18" />
      </G>
    </Svg>
  );
};