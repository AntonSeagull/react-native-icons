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

export const GiAustralia = (props: IconProps) => {
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
        <Path d="m380.37 28.839-27.24 100.215-64-48 17.405-34.46-83.863 8.079-13.541 42.38-35.512-25.482-67.16 85.62-83.008 48.593 34.81 156.752 38.87 6.518 112-64 74.38 52.082 21.62-28.094 32 72.012L424 415.452l64.549-126.398-6.014-64.703-65.404-79.297-36.762-116.215zm-14.75 411.238 15.099 43.084 20.412-2.107 11.435-35.864-46.947-5.113z" />
      </G>
    </Svg>
  );
};