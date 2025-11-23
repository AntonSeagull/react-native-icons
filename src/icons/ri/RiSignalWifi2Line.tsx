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

export const RiSignalWifi2Line = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m0 9c-1.42 0-2.764.33-3.958.915L12 17.817l3.958-4.902A9 9 0 0 0 12 12m0-7c-3.027 0-5.922.842-8.42 2.392l3.179 3.935A10.95 10.95 0 0 1 12 10c1.897 0 3.683.48 5.241 1.327L20.42 7.39A15.9 15.9 0 0 0 12 5" />
      </G>
    </Svg>
  );
};