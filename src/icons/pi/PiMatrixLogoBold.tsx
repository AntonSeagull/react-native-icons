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

export const PiMatrixLogoBold = (props: IconProps) => {
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
        <Path d="M76 216a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H52v152h12a12 12 0 0 1 12 12M216 28h-24a12 12 0 0 0 0 24h12v152h-12a12 12 0 0 0 0 24h24a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-28 132v-40a36 36 0 0 0-60-26.8 35.91 35.91 0 0 0-39.51-5.68A12 12 0 0 0 68 96v64a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0" />
      </G>
    </Svg>
  );
};