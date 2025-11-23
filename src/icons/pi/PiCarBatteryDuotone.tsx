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

export const PiCarBatteryDuotone = (props: IconProps) => {
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
        <Path d="M232 88v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M192 136a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8m-88-8H72a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m136-40v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h16V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h32V56a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v16h16a16 16 0 0 1 16 16m-80-16h32V56h-32Zm-96 0h32V56H64Zm160 112V88H32v96z" />
      </G>
    </Svg>
  );
};