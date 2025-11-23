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

export const SiLaunchpad = (props: IconProps) => {
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
        <Path d="m21.999 18.676-4.432-2.556-4.783 2.764V24zM11.216 24v-5.119l-4.785-2.762-4.43 2.557zm.779-6.475 4.789-2.765V9.236l-4.785-2.76-4.783 2.76v5.527l4.781 2.761zM1.22 6.682v10.641l4.432-2.559V9.239L1.219 6.68zm19.615 1.121-2.484 1.436v5.522l4.43 2.559V6.678zM2.001 5.324l4.435 2.559 4.781-2.762V.003zm15.566 2.559 4.434-2.559L12.782 0v5.121z" />
      </G>
    </Svg>
  );
};