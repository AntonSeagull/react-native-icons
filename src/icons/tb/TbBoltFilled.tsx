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

export const TbBoltFilled = (props: IconProps) => {
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
        <Path d="m13 2 .018.001.016.001.083.005.011.002h.011l.038.009.052.008.016.006.011.001.029.011.052.014.019.009.015.004.028.014.04.017.021.012.022.01.023.015.031.017.034.024.018.011.013.012.024.017.038.034.022.017.008.01.014.012.036.041.026.027.006.009c.12.147.196.322.218.513l.001.012.002.041L14 3v6h5a1 1 0 0 1 .868 1.497l-.06.091-8 11C11.24 22.371 10 21.968 10 21v-6H5a1 1 0 0 1-.868-1.497l.06-.091 8-11 .01-.013.018-.024.033-.038.018-.022.009-.008.013-.014.04-.036.028-.026.008-.006a1 1 0 0 1 .402-.199l.011-.001.027-.005.074-.013.011-.001.041-.002z" />
      </G>
    </Svg>
  );
};