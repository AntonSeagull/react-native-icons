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

export const GiIdCard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M50 96c-9.972 0-18 8.028-18 18v300c0 9.972 8.028 18 18 18h412c9.972 0 18-8.028 18-18V114c0-9.972-8.028-18-18-18zm5 23h402v18H55zm0 32h210v258H55zm18 18v222h7.03c.47-24.342 18.315-74.172 47.093-97.889C136.331 300.56 147.615 305 160 305s23.669-4.44 32.877-11.889C221.655 316.828 239.5 366.658 239.97 391H247V169zm222 14h146v18H295zm-135 10c20.835 0 39 20.241 39 47s-18.165 47-39 47-39-20.241-39-47 18.165-47 39-47m135 22h114v18H295zm0 32h50v18h-50zm80 0h66v18h-66zm-16 96h98v18h-98zm-32 32h130v18H327z" />
      </G>
    </Svg>
  );
};