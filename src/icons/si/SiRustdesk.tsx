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

export const SiRustdesk = (props: IconProps) => {
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
        <Path d="m20.608 5.601-1.97 1.96c-.348.31-.516.81-.321 1.233 1.313 2.747.814 6.023-1.34 8.175-2.156 2.152-5.435 2.65-8.184 1.338-.406-.182-.881-.028-1.193.288l-2.003 2a1.065 1.065 0 0 0 .192 1.671 12.005 12.005 0 0 0 14.686-1.765 11.97 11.97 0 0 0 1.806-14.665 1.065 1.065 0 0 0-1.673-.234zM3.561 3.474a11.97 11.97 0 0 0-1.864 14.663 1.065 1.065 0 0 0 1.672.235l1.961-1.948c.355-.31.528-.816.331-1.245-1.313-2.747-.816-6.022 1.34-8.174 2.154-2.153 5.434-2.65 8.184-1.339.4.18.87.03 1.182-.277l2.015-2.012a1.063 1.063 0 0 0-.192-1.671A12.01 12.01 0 0 0 3.519 3.527z" />
      </G>
    </Svg>
  );
};