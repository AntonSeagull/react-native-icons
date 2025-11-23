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

export const PiOrangeSliceLight = (props: IconProps) => {
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
        <Path d="M248 82H8a6 6 0 0 0-6 6 126 126 0 0 0 252 0 6 6 0 0 0-6-6M74.46 150 122 102.48v67.28A81.66 81.66 0 0 1 74.46 150M66 141.54A81.66 81.66 0 0 1 46.24 94h67.28Zm68-39.06L181.54 150A81.66 81.66 0 0 1 134 169.76Zm56 39.06L142.48 94h67.28A81.66 81.66 0 0 1 190 141.54M128 202A114.14 114.14 0 0 1 14.16 94h20a94 94 0 0 0 187.6 0h20A114.14 114.14 0 0 1 128 202" />
      </G>
    </Svg>
  );
};