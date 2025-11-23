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

export const PiSynagogueDuotone = (props: IconProps) => {
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
        <Path d="M216 80v32h-32V80a16 16 0 0 1 16-16 16 16 0 0 1 16 16M72 80a16 16 0 0 0-16-16 16 16 0 0 0-16 16v32h32Zm0 56v80h40v-40a16 16 0 0 1 16-16 16 16 0 0 1 16 16v40h40v-80l-56-32Z" opacity={0.2} />
        <Path d="M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M200 72a8 8 0 0 1 8 8v24h-16V80a8 8 0 0 1 8-8M56 72a8 8 0 0 1 8 8v24H48V80a8 8 0 0 1 8-8m-8 48h16v88H48Zm80 32a24 24 0 0 0-24 24v32H80v-67.36l48-27.43 48 27.43V208h-24v-32a24 24 0 0 0-24-24m64 56v-88h16v88Z" />
      </G>
    </Svg>
  );
};