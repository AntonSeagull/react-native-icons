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

export const PiUserFocusLight = (props: IconProps) => {
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
        <Path d="M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m136 92a6 6 0 0 1-4.8-2.4 54 54 0 0 0-86.4 0 6 6 0 1 1-9.6-7.2 65.65 65.65 0 0 1 29.69-22.26 38 38 0 1 1 46.22 0 65.65 65.65 0 0 1 29.69 22.26 6 6 0 0 1-4.8 9.6m-48-36a26 26 0 1 0-26-26 26 26 0 0 0 26 26" />
      </G>
    </Svg>
  );
};