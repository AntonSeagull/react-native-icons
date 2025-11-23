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

export const PiNetworkXThin = (props: IconProps) => {
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
        <Path d="M232 116H132V84h12a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v32H24a4 4 0 0 0 0 8h36v40H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12H68v-40h120v20a4 4 0 0 0 8 0v-20h36a4 4 0 0 0 0-8M108 72V40a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4M84 176v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m134.83-5.17L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66" />
      </G>
    </Svg>
  );
};