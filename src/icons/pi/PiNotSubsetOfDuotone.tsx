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

export const PiNotSubsetOfDuotone = (props: IconProps) => {
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
        <Path d="M200 48v160h-72a80 80 0 0 1-80-80 80 80 0 0 1 80-80Z" opacity={0.2} />
        <Path d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l128.1-140.92a8 8 0 0 0-.54-11.3M56 128a72.08 72.08 0 0 1 72-72h54.64L74 175.53A71.7 71.7 0 0 1 56 128" />
      </G>
    </Svg>
  );
};