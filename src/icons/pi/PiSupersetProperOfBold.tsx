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

export const PiSupersetProperOfBold = (props: IconProps) => {
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
        <Path d="M228 128a92.1 92.1 0 0 1-92 92H64a12 12 0 0 1 0-24h72a68 68 0 0 0 0-136H64a12 12 0 0 1 0-24h72a92.1 92.1 0 0 1 92 92" />
      </G>
    </Svg>
  );
};