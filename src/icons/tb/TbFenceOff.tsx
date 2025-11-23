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

export const TbFenceOff = (props: IconProps) => {
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
        <Path d="M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4M10 12v-2m0-4L8 4M6 6v6M14 16v4h4v-2M18 12V6l-2-2-2 2v4M3 3l18 18" />
      </G>
    </Svg>
  );
};