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

export const TbBrightnessDownFilled = (props: IconProps) => {
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
        <Path d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 4a1 1 0 0 1 .993.883L13 5.01a1 1 0 0 1-1.993.117L11 5a1 1 0 0 1 1-1M17 6a1 1 0 0 1 .993.883L18 7.01a1 1 0 0 1-1.993.117L16 7a1 1 0 0 1 1-1M19 11a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L18 12a1 1 0 0 1 1-1M17 16a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L16 17a1 1 0 0 1 1-1M12 18a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 19a1 1 0 0 1 1-1M7 16a1 1 0 0 1 .993.883L8 17.01a1 1 0 0 1-1.993.117L6 17a1 1 0 0 1 1-1M5 11a1 1 0 0 1 .993.883L6 12.01a1 1 0 0 1-1.993.117L4 12a1 1 0 0 1 1-1M7 6a1 1 0 0 1 .993.883L8 7.01a1 1 0 0 1-1.993.117L6 7a1 1 0 0 1 1-1" />
      </G>
    </Svg>
  );
};