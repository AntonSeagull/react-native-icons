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

export const SiDpd = (props: IconProps) => {
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
        <Path d="M16.01 10.71a.36.36 0 0 1-.343-.006l-.558-.331a.43.43 0 0 1-.182-.312l-.014-.65a.36.36 0 0 1 .165-.3l6.7-3.902L12.377.085A.8.8 0 0 0 12 0a.8.8 0 0 0-.377.085l-9.4 5.124 10.53 6.13a.36.36 0 0 1 .172.295v8.944c0 .112-.08.241-.178.294l-.567.315c-.171.062-.256.043-.361 0l-.569-.315a.36.36 0 0 1-.175-.294v-7.973a.22.22 0 0 0-.095-.156L1.702 7.048v10.579c0 .236.167.528.371.648l9.556 5.636c.102.06.237.09.371.089a.75.75 0 0 0 .371-.09l9.557-5.635a.84.84 0 0 0 .37-.648V7.047Z" />
      </G>
    </Svg>
  );
};