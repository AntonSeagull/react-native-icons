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

export const PiFunctionLight = (props: IconProps) => {
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
        <Path d="M206 40a6 6 0 0 1-6 6h-29.29a26 26 0 0 0-25.58 21.35L135.19 122H184a6 6 0 0 1 0 12h-51l-10.33 56.8A38 38 0 0 1 85.29 222H56a6 6 0 0 1 0-12h29.29a26 26 0 0 0 25.58-21.35l9.94-54.65H72a6 6 0 0 1 0-12h51l10.33-56.8A38 38 0 0 1 170.71 34H200a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};