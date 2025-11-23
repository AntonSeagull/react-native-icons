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

export const PiTextColumnsLight = (props: IconProps) => {
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
        <Path d="M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6m-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};