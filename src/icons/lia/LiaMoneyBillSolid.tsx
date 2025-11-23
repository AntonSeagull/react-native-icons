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

export const LiaMoneyBillSolid = (props: IconProps) => {
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
        <Path d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m10 2c-2.211 0-4 2.016-4 4.5s1.789 4.5 4 4.5 4-2.016 4-4.5-1.789-4.5-4-4.5m0 2c1.102 0 2 1.121 2 2.5s-.898 2.5-2 2.5-2-1.121-2-2.5.898-2.5 2-2.5m-7.5 1a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14" />
      </G>
    </Svg>
  );
};