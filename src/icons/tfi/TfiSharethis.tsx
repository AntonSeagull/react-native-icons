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

export const TfiSharethis = (props: IconProps) => {
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
        <Path d="M16.5 13.168a3.33 3.33 0 0 1-3.333 3.332 3.33 3.33 0 0 1-3.313-3.686l-3.75-1.876A3.33 3.33 0 0 1 .5 8.5a3.33 3.33 0 0 1 3.333-3.332c.875 0 1.677.343 2.271.895l3.75-1.874A3.33 3.33 0 0 1 13.167.501 3.33 3.33 0 0 1 16.5 3.835a3.33 3.33 0 0 1-5.604 2.437l-3.75 1.875c.01.115.021.24.021.354 0 .115-.011.24-.021.354l3.75 1.877a3.34 3.34 0 0 1 2.271-.897 3.327 3.327 0 0 1 3.333 3.333" />
      </G>
    </Svg>
  );
};