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

export const PiFlagBold = (props: IconProps) => {
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
        <Path d="M40.14 46.88A12 12 0 0 0 36 56v168a12 12 0 0 0 24 0v-42.28c22.84-17.12 42.1-9.12 70.68 5 16.23 8 34.74 17.2 54.8 17.2 14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 236 176V56a12 12 0 0 0-19.86-9.07c-24.71 21.41-44.53 13.31-74.82-1.68-28.13-13.98-63.15-31.31-101.18 1.63M212 170.26c-22.84 17.13-42.1 9.11-70.68-5C118.16 153.76 90.33 140 60 153.87V61.69c22.84-17.12 42.1-9.12 70.68 5 16.23 8 34.74 17.2 54.8 17.2A63 63 0 0 0 212 78.08Z" />
      </G>
    </Svg>
  );
};