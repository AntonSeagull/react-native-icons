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

export const SiTruenas = (props: IconProps) => {
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
        <Path d="M24 10.049v5.114l-10.949 6.324v-5.114zm-24 0v5.114l10.956 6.324v-5.114zm12.004-.605-4.433 2.559 4.433 2.559 4.429-2.559zm10.952-1.207-9.905-5.723v5.118l5.473 3.164zm-12-.605V2.513L1.044 8.236l4.432 2.555z" />
      </G>
    </Svg>
  );
};