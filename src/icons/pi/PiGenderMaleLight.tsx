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

export const PiGenderMaleLight = (props: IconProps) => {
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
        <Path d="M216 34h-48a6 6 0 0 0 0 12h33.52l-46.8 46.79a78 78 0 1 0 4.42 114.4 78.11 78.11 0 0 0 4.07-105.91L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-65.34 164.7a66 66 0 1 1 0-93.36 66.1 66.1 0 0 1 0 93.36" />
      </G>
    </Svg>
  );
};