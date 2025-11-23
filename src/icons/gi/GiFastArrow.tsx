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

export const GiFastArrow = (props: IconProps) => {
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
        <Path d="M20.91 20.002v32.29l357.793 338.9L20.91 101.407v58.942l355.942 250.224-86.89-17.527 26.913 30.947-70.502 3.008 245.633 64.603-65.502-249.054-15.352 92.36-27.3-31.46 16.683 60.464L161.26 20.002h-22.37l142.276 208.935L109.496 42.17l98.975 138.547L45.194 20.002zm433 92.186-32.234 38.482 55.19 208.21 15.286-217.794-38.242-28.9zm-231.88 327.89-24.975 23.47 21.674 27.62 149.225-12.78-145.926-38.31z" />
      </G>
    </Svg>
  );
};