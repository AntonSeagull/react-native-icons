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

export const PiMatrixLogoLight = (props: IconProps) => {
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
        <Path d="M46 46v164h18a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm170-12h-24a6 6 0 0 0 0 12h18v164h-18a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-64 56a30 30 0 0 0-24 12 30 30 0 0 0-42-6 6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a30 30 0 0 0-30-30" />
      </G>
    </Svg>
  );
};