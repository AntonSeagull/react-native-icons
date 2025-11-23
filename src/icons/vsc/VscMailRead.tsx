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

export const VscMailRead = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.25 1.57h-.51L1 5.56v7.94l.5.5h13l.5-.5V5.56zM8 2.58l5.63 3.32-1.37 1.59H3.74L2.43 5.9zM14 13H2V6.92L3.11 8.3l.39.19h9l.39-.19L14 6.92z" />
      </G>
    </Svg>
  );
};