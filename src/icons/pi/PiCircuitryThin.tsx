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

export const PiCircuitryThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M88 156a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-44 52V48a4 4 0 0 1 4-4h36v104.4a20 20 0 1 0 8 0v-42.74l56 56V212H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-52v-52a4 4 0 0 0-1.17-2.83L92 94.34V44h40v28a4 4 0 0 0 1.17 2.83L151.33 93a20 20 0 1 0 5.67-5.67l-17-17V44h68a4 4 0 0 1 4 4ZM168 92a12 12 0 1 1-12 12 12 12 0 0 1 12-12" />
      </G>
    </Svg>
  );
};