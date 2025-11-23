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

export const FaKorvue = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 446 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 223, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34M87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1zm161.8 272.1-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8z" />
      </G>
    </Svg>
  );
};