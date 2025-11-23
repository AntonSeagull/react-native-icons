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

export const PiMatrixLogoFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-8v112h8a8 8 0 0 1 0 16m80-40a8 8 0 0 1-8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.65 23.94 23.94 0 0 1 26.34 3.78A24 24 0 0 1 168 120v32a8 8 0 0 1-8 8m40 32a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V72h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Z" />
      </G>
    </Svg>
  );
};