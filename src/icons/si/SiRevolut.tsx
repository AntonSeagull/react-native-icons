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

export const SiRevolut = (props: IconProps) => {
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
        <Path d="M20.913 6.957C20.913 3.12 17.79 0 13.95 0H2.424v3.86h10.978c1.738 0 3.177 1.366 3.209 3.044a3.08 3.08 0 0 1-.888 2.232 3.08 3.08 0 0 1-2.214.93H9.232a.276.276 0 0 0-.275.275v3.431q0 .09.052.162L16.265 24h5.311l-7.273-10.094c3.663-.184 6.61-3.261 6.61-6.95M6.894 5.923h-4.47V24h4.47z" />
      </G>
    </Svg>
  );
};