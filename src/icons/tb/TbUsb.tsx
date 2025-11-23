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

export const TbUsb = (props: IconProps) => {
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
        <Path d="M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 17V5.5M7 10v3l5 3M12 14.5l5-2V10M16 10h2V8h-2z" />
        <Path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M10 5.5h4L12 3z" />
      </G>
    </Svg>
  );
};