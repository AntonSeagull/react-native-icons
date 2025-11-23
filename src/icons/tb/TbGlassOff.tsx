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

export const TbGlassOff = (props: IconProps) => {
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
        <Path d="M8 21h8M12 16v5M17 5l1 6c0 .887-.233 1.685-.646 2.37m-2.083 1.886c-.941.48-2.064.744-3.271.744-3.314 0-6-1.988-6-5l.711-4.268" />
        <Path d="M10.983 6.959q.494.04 1.017.041c2.761 0 5-.895 5-2s-2.239-2-5-2c-1.716 0-3.23.346-4.13.872M3 3l18 18" />
      </G>
    </Svg>
  );
};