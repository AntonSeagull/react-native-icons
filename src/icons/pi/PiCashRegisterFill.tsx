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

export const PiCashRegisterFill = (props: IconProps) => {
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
        <Path d="m239.76 158.06-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M168 88h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m-32-32a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16Zm8 40a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M80 40h40v16H80Zm-8 48h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m152 72H32v-24h192Z" />
      </G>
    </Svg>
  );
};