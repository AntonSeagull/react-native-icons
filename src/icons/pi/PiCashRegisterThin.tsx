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

export const PiCashRegisterThin = (props: IconProps) => {
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
        <Path d="M235.88 159 213.4 69.09A12 12 0 0 0 201.75 60H132V40a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v20H54.25a12 12 0 0 0-11.65 9.09L20.12 159a4 4 0 0 0-.12 1v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-.12-1M76 40a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v20H76ZM50.37 71a4 4 0 0 1 3.88-3h147.5a4 4 0 0 1 3.88 3l21.25 85H29.12ZM224 196H32a4 4 0 0 1-4-4v-28h200v28a4 4 0 0 1-4 4M68 96a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-96 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4" />
      </G>
    </Svg>
  );
};