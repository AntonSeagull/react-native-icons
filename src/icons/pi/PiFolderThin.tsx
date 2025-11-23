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

export const PiFolderThin = (props: IconProps) => {
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
        <Path d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M36 56a4 4 0 0 1 4-4h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36Zm184 144.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};