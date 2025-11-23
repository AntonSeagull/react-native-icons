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

export const PiSelectionPlusFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 72a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H72v24a8 8 0 0 1-16 0Zm56 112H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h40a8 8 0 0 1 0 16m16-120a8 8 0 0 1 8-8h32a16 16 0 0 1 16 16v40a8 8 0 0 1-16 0V72h-32a8 8 0 0 1-8-8m72 120h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};