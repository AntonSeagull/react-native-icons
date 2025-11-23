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

export const PiCropFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-88 48h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V96h-40a8 8 0 0 1 0-16m72 96h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8V96H64a8 8 0 0 1 0-16h16V64a8 8 0 0 1 16 0v96h96a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};