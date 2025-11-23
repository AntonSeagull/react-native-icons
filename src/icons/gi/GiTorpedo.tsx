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

export const GiTorpedo = (props: IconProps) => {
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
        <Path d="M40 47c-9.282 0-17 7.718-17 17s7.718 17 17 17 17-7.718 17-17-7.718-17-17-17m0 16c.446 0 1 .554 1 1s-.554 1-1 1-1-.554-1-1 .554-1 1-1m48 48c-9.282 0-17 7.718-17 17s7.718 17 17 17 17-7.718 17-17-7.718-17-17-17m0 16c.446 0 1 .554 1 1s-.554 1-1 1-1-.554-1-1 .554-1 1-1m-40 40c-13.7 0-25 11.3-25 25s11.3 25 25 25 25-11.3 25-25-11.3-25-25-25m0 18c3.973 0 7 3.027 7 7s-3.027 7-7 7-7-3.027-7-7 3.027-7 7-7m52.23 32 13 39-13 39h26.514v-78zm164.622 0-120.108 30.025v17.948L264.852 295h117.892v-78zm135.892 0v78h30v-78zm48 0v78h5.684c28.584-7.435 40.316-23.962 40.316-39s-11.732-31.565-40.316-39z" />
      </G>
    </Svg>
  );
};