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

export const CiKeyboard = (props: IconProps) => {
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
        <Path d="M19.437 18.5H4.562a2.5 2.5 0 0 1-2.5-2.5V8a2.5 2.5 0 0 1 2.5-2.5h14.875a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5M4.562 6.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h14.875a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5Z" />
        <Path d="M5.548 16.5h12.9a.5.5 0 0 0 0-1h-12.9a.5.5 0 0 0 0 1" />
        <Circle cx={5.82} cy={9.248} r={0.75} />
        <Circle cx={9.94} cy={9.248} r={0.75} />
        <Circle cx={14.06} cy={9.248} r={0.75} />
        <Circle cx={18.18} cy={9.248} r={0.75} />
        <Circle cx={5.82} cy={12.998} r={0.75} />
        <Circle cx={9.94} cy={12.998} r={0.75} />
        <Circle cx={14.06} cy={12.998} r={0.75} />
        <Circle cx={18.18} cy={12.998} r={0.75} />
      </G>
    </Svg>
  );
};