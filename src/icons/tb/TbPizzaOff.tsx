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

export const TbPizzaOff = (props: IconProps) => {
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
        <Path d="M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.1 19.1 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" />
        <Path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18" />
      </G>
    </Svg>
  );
};