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

export const PiAirTrafficControlDuotone = (props: IconProps) => {
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
        <Path d="m223.51 82.73-26.18 72a8 8 0 0 1-7.52 5.27H66.19a8 8 0 0 1-7.52-5.27l-26.18-72A8 8 0 0 1 40 72h176a8 8 0 0 1 7.51 10.73" opacity={0.2} />
        <Path d="M229.11 70.82A16 16 0 0 0 216 64h-80V32h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65M110.68 152l-13.1-72h60.84l-13.1 72ZM40 80h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z" />
      </G>
    </Svg>
  );
};