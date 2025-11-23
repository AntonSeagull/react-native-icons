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

export const LuSquircleDashed = (props: IconProps) => {
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
        <Path d="M13.77 3.043a34 34 0 0 0-3.54 0M13.771 20.956a33 33 0 0 1-3.541.001M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438M20.957 10.23a33 33 0 0 1 0 3.54M3.043 10.23a34 34 0 0 0 .001 3.541M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
      </G>
    </Svg>
  );
};