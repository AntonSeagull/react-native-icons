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

export const PiCropBold = (props: IconProps) => {
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
        <Path d="M244 192a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H64a12 12 0 0 1-12-12V76H24a12 12 0 0 1 0-24h28V24a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M104 76h76v76a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12h-88a12 12 0 0 0 0 24" />
      </G>
    </Svg>
  );
};