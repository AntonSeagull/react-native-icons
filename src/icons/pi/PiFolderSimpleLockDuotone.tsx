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

export const PiFolderSimpleLockDuotone = (props: IconProps) => {
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
        <Path d="M224 168v40h-72v-40Z" opacity={0.2} />
        <Path d="M232 88v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m0 80v40a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h8v-4a28 28 0 0 1 56 0v4h8a8 8 0 0 1 8 8m-56-8h24v-4a12 12 0 0 0-24 0Zm40 16h-56v24h56Z" />
      </G>
    </Svg>
  );
};