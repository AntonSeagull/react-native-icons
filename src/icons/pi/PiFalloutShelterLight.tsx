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

export const PiFalloutShelterLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m69.29-92.83A6 6 0 0 0 192 122h-52.79L165 83.33a6 6 0 0 0-5-9.33H96a6 6 0 0 0-5 9.33L116.79 122H64a6 6 0 0 0-5 9.33l32 48a6 6 0 0 0 10 0l27-40.51 27 40.51a6 6 0 0 0 10 0l32-48a6 6 0 0 0 .29-6.16M148.79 86 128 117.18 107.21 86ZM96 165.18 75.21 134h41.58Zm64 0L139.21 134h41.58Z" />
      </G>
    </Svg>
  );
};