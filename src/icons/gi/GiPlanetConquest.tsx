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

export const GiPlanetConquest = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M215 32v140c5.9-1.4 11.9-2.6 18-3.4v-42.9c45-8 90 32.3 135 2.3V48c-45 30-90-10.31-135-2.29V32zm41 153c-83.5 0-151 67.5-151 151s67.5 151 151 151 151-67.5 151-151-67.5-151-151-151m-20.6 25.8 77.4 119.3-83.7 27.6-22.8-54.1-24.4 21.2-57.9-12.5 48.3-50 41.4 7.9zm103.2 6.1-10.2 34.9 38.3-.7-36.4 31.1-31.1-24.8 12.7-23.6zm33.6 148.4-26.5 42.9-21.2-36.1zM316 398l15.9 46.7c-35.1 28.4-87.1 35.9-115.6 16.9l38.2-60.9 29.2 30.7z" />
      </G>
    </Svg>
  );
};