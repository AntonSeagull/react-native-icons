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

export const Im3 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m2.381.758-.537 2.686h10.934l-.342 1.735H1.496l-.53 2.686h10.933l-.61 3.063-4.406 1.46-3.819-1.46.261-1.329H.639L0 12.823l6.316 2.417 7.281-2.417L16 .757z" />
      </G>
    </Svg>
  );
};