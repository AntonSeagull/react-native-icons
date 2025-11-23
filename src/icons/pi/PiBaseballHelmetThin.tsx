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

export const PiBaseballHelmetThin = (props: IconProps) => {
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
        <Path d="M88 132a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16m160-48h-28.08A100 100 0 0 0 20 128v24a68.07 68.07 0 0 0 68 68h40a68.07 68.07 0 0 0 68-68v-20h52a4 4 0 0 0 0-8m-60 28a60.07 60.07 0 0 1-60 60h-8a68.07 68.07 0 0 0 36-60v-20h32Zm-36-28a4 4 0 0 0-4 4v24a60 60 0 0 1-120 0v-24a92 92 0 0 1 183.91-4Z" />
      </G>
    </Svg>
  );
};