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

export const HiMiniBookOpen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.75 16.82A7.46 7.46 0 0 1 15 15.5a7.5 7.5 0 0 1 2.046.282.75.75 0 0 0 .954-.722v-11a.75.75 0 0 0-.546-.721A9 9 0 0 0 15 3a8.96 8.96 0 0 0-4.25 1.065zM9.25 4.065A8.96 8.96 0 0 0 5 3a9 9 0 0 0-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.5 7.5 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32z" />
      </G>
    </Svg>
  );
};