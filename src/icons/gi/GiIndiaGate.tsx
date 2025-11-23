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

export const GiIndiaGate = (props: IconProps) => {
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
        <Path d="M256 49.5c-20 0-48 3.5-64 10.5v18h-64v55h256V78h-64V60c-16-7-44-10.5-64-10.5M208 90c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16m96 0c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16m-192 61v18H96v18h320v-18h-16v-18zm-32 52v18h352v-18zm16 36v72h112.7c8.1-52 86.5-52 94.6 0H416v-72zm0 90v30h96v18H96v119h112V329zm208 0v167h112V377h-96v-18h96v-30z" />
      </G>
    </Svg>
  );
};