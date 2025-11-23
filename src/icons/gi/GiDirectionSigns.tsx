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

export const GiDirectionSigns = (props: IconProps) => {
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
        <Path d="m277.3 35.11-32.1 2.12-1 32.93 33.6.05zM151.7 88.04 67.96 118.9 152 169.2l188-6.2 2.4-74.72zM279.2 183l-38.3 1.3-.8 27.8 39.5 1.2zm-93.1 45.6.8 64.2 200.4.9 51.7-29.2-55.8-30.2zm51.1 82.5-5 175.3 50.9.6-2.3-175.7z" />
      </G>
    </Svg>
  );
};