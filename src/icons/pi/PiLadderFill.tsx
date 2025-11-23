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

export const PiLadderFill = (props: IconProps) => {
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
        <Path d="M215.52 213.26 164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26 8.1 8.1 0 0 0 2.71.48 8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48 8 8 0 0 0 4.79-10.26M109.39 64h30a8 8 0 0 1 0 16h-30a8 8 0 1 1 0-16m.86 96H80.3a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm14.54-40H94.84a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm11 32L156 96.41 176.21 152Z" />
      </G>
    </Svg>
  );
};