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

export const PiAlignCenterVerticalThin = (props: IconProps) => {
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
        <Path d="M224 124h-20V72a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v52h-24V48a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v76H32a4 4 0 0 0 0 8h20v76a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-76h24v52a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h20a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm88-24a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};