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

export const GiInfo = (props: IconProps) => {
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
        <Path d="M256 21C126.426 21 21 126.426 21 256s105.426 235 235 235 235-105.426 235-235S385.574 21 256 21m0 36c110.118 0 199 88.882 199 199s-88.882 199-199 199S57 366.118 57 256 145.882 57 256 57m-7.352 36.744q-12.34 0-21.27 8.928-8.664 8.928-8.665 21.008.001 12.341 8.666 21.006 8.925 8.665 21.268 8.666 12.342-.001 21.006-8.666 8.666-8.666 8.666-21.006 0-12.08-8.927-21.008-8.666-8.928-20.745-8.928zm-62.757 82.453v28.096h46.215v186.13H185.89v27.833h140.22v-27.834h-45.69V176.197z" />
      </G>
    </Svg>
  );
};