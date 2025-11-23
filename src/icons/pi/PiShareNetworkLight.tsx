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

export const PiShareNetworkLight = (props: IconProps) => {
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
        <Path d="M176 162a37.9 37.9 0 0 0-28.3 12.67l-48.9-31.43a37.9 37.9 0 0 0 0-30.48l48.9-31.43a38 38 0 1 0-6.5-10.09l-48.9 31.43a38 38 0 1 0 0 50.66l48.9 31.43A38 38 0 1 0 176 162m0-132a26 26 0 1 1-26 26 26 26 0 0 1 26-26M64 154a26 26 0 1 1 26-26 26 26 0 0 1-26 26m112 72a26 26 0 1 1 26-26 26 26 0 0 1-26 26" />
      </G>
    </Svg>
  );
};