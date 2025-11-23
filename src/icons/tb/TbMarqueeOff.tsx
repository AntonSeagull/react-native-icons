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

export const TbMarqueeOff = (props: IconProps) => {
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
        <Path d="M4 6c0-.556.227-1.059.593-1.421M9 4h1.5M13.5 4H15M18 4a2 2 0 0 1 2 2M20 9v1.5M20 13.5V15M19.402 19.426A2 2 0 0 1 18 20M15 20h-1.5M10.5 20H9M6 20a2 2 0 0 1-2-2M4 15v-1.5M4 10.5V9M3 3l18 18" />
      </G>
    </Svg>
  );
};