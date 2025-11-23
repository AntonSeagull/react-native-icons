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

export const TfiLayoutGrid3 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 5h5V0H0zm1-4h3v3H1zm5 4h5V0H6zm1-4h3v3H7zm5-1v5h5V0zm4 4h-3V1h3zM0 11h5V6H0zm1-4h3v3H1zm5 4h5V6H6zm1-4h3v3H7zm5 4h5V6h-5zm1-4h3v3h-3zM0 17h5v-5H0zm1-4h3v3H1zm5 4h5v-5H6zm1-4h3v3H7zm5 4h5v-5h-5zm1-4h3v3h-3z" />
      </G>
    </Svg>
  );
};