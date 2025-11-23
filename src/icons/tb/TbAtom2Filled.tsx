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

export const TbAtom2Filled = (props: IconProps) => {
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
        <Path d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 20a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 21a1 1 0 0 1 1-1M3 8a1 1 0 0 1 .993.883L4 9.01a1 1 0 0 1-1.993.117L2 9a1 1 0 0 1 1-1M21 8a1 1 0 0 1 .993.883L22 9.01a1 1 0 0 1-1.993.117L20 9a1 1 0 0 1 1-1M2.89 12.006a1 1 0 0 1 1.104.884 8 8 0 0 0 4.444 6.311A1 1 0 1 1 7.562 21a10 10 0 0 1-5.556-7.89 1 1 0 0 1 .884-1.103zM20.993 12l.117.006a1 1 0 0 1 .884 1.104 10 10 0 0 1-5.556 7.889 1 1 0 1 1-.876-1.798 8 8 0 0 0 4.444-6.31 1 1 0 0 1 .987-.891M5.567 4.226a10 10 0 0 1 12.666 0 1 1 0 1 1-1.266 1.548 8 8 0 0 0-10.134 0 1 1 0 1 1-1.266-1.548" />
      </G>
    </Svg>
  );
};