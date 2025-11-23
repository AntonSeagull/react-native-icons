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

export const TbBrandTesla = (props: IconProps) => {
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
        <Path d="m12 21 3-11c2.359 0 3 0 3 1 0 0 1.18-1.745 2-3-3.077-1.464-6-1-6-1l-2 2-2-2s-2.923-.464-6 1c.82 1.255 2 3 2 3 0-1 .744-1 3-1zM20 5C14.886 3 9.114 3 4 5" />
      </G>
    </Svg>
  );
};