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

export const DiBackbone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M16 9.875 6.461 4.437v23.698L16 22.697l9.539 5.438V4.437zm-4.752 6.411L16 13.577l4.752 2.709L16 18.995zm-1.63-6.643 3.399 1.938-3.399 1.938zm0 9.41 3.145 1.792-3.145 1.793zm12.764 3.585-3.145-1.793 3.145-1.793zm-3.4-11.057 3.399-1.938v3.876z" />
      </G>
    </Svg>
  );
};