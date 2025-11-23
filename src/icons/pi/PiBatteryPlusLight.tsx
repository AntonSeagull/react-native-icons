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

export const PiBatteryPlusLight = (props: IconProps) => {
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
        <Path d="M150 128a6 6 0 0 1-6 6h-22v22a6 6 0 0 1-12 0v-22H88a6 6 0 0 1 0-12h22v-22a6 6 0 0 1 12 0v22h22a6 6 0 0 1 6 6m72-48v96a22 22 0 0 1-22 22H32a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h168a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10H32a10 10 0 0 0-10 10v96a10 10 0 0 0 10 10h168a10 10 0 0 0 10-10Zm38 10a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};