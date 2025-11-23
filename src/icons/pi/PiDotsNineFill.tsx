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

export const PiDotsNineFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};