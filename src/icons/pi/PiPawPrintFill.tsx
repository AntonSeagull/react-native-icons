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

export const PiPawPrintFill = (props: IconProps) => {
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
        <Path d="M240 108a28 28 0 1 1-28-28 28 28 0 0 1 28 28m-168 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28m20-20a28 28 0 1 0-28-28 28 28 0 0 0 28 28m72 0a28 28 0 1 0-28-28 28 28 0 0 0 28 28m23.12 60.86a35.3 35.3 0 0 1-16.87-21.14 44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82 40 40 0 0 0 88 224a39.5 39.5 0 0 0 15.52-3.13 64.1 64.1 0 0 1 48.87 0 40 40 0 0 0 34.73-72Z" />
      </G>
    </Svg>
  );
};