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

export const PiCraneTowerLight = (props: IconProps) => {
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
        <Path d="M240 82H107.71L85.37 37.32A6 6 0 0 0 80 34H48a6 6 0 0 0-6 6v42H24a6 6 0 0 0 0 12h18v116H24a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12h-18V94h100v90a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V94h18a6 6 0 0 0 0-12M54 46h22.29l18 36H54Zm0 164v-52h44v52Zm44-64H54V94h44Z" />
      </G>
    </Svg>
  );
};