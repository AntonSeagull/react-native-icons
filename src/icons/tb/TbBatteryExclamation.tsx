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

export const TbBatteryExclamation = (props: IconProps) => {
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
        <Path d="M9 17h8a2 2 0 0 0 2-2v-.5c0-.276.224-.5.5-.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5s-.5-.224-.5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M5 16v3M5 22v.01" />
      </G>
    </Svg>
  );
};