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

export const PiAlarmThin = (props: IconProps) => {
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
        <Path d="M128 44a92 92 0 1 0 92 92 92.1 92.1 0 0 0-92-92m0 176a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84M58.83 34.83l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 5.66m176 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66M188 136a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4V80a4 4 0 0 1 8 0v52h52a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};