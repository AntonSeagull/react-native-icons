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

export const PiShieldCheckLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64 22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 70c0 37.76-13.94 68.39-41.44 91.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66C59.94 180.39 46 149.76 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-37.76-12.24a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0" />
      </G>
    </Svg>
  );
};