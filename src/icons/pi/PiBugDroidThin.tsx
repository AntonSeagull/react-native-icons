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

export const PiBugDroidThin = (props: IconProps) => {
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
        <Path d="m186.17 51.49 16.66-16.66a4 4 0 1 0-5.66-5.66l-17 17a83.72 83.72 0 0 0-104.26 0l-17-17a4 4 0 0 0-5.66 5.66l16.58 16.66A83.75 83.75 0 0 0 44 112v40a84 84 0 0 0 168 0v-40a83.75 83.75 0 0 0-25.83-60.51M128 36a76.08 76.08 0 0 1 76 76v12H52v-12a76.08 76.08 0 0 1 76-76m0 192a76.08 76.08 0 0 1-76-76v-20h152v20a76.08 76.08 0 0 1-76 76m20-136a8 8 0 1 1 8 8 8 8 0 0 1-8-8m-56 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8" />
      </G>
    </Svg>
  );
};