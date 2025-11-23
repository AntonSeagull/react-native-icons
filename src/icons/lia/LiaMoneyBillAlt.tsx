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

export const LiaMoneyBillAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m9 2c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-9zm-6.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14" />
      </G>
    </Svg>
  );
};