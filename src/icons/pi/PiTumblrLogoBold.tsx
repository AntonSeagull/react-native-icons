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

export const PiTumblrLogoBold = (props: IconProps) => {
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
        <Path d="M192 124a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V24a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12 36 36 0 0 1-36 36 12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h20v52a68.07 68.07 0 0 0 68 68h40a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-32a4 4 0 0 1-4-4v-44Zm-32 72h20v24h-28a44.05 44.05 0 0 1-44-44v-64a12 12 0 0 0-12-12H76V82.79A60.18 60.18 0 0 0 122.79 36H132v36a12 12 0 0 0 12 12h36v16h-36a12 12 0 0 0-12 12v56a28 28 0 0 0 28 28" />
      </G>
    </Svg>
  );
};