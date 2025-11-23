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

export const CiSliderVertical = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5 5.13V2.55a.5.5 0 0 0-.5-.5.51.51 0 0 0-.5.5v2.58A2 2 0 0 0 6 7.06v1a2 2 0 0 0 1.5 1.93v11.46a.5.5 0 0 0 1 0V9.99A2 2 0 0 0 10 8.06v-1a2 2 0 0 0-1.5-1.93M9 8.06a1 1 0 1 1-2 0v-1a1.006 1.006 0 0 1 .98-1H8a1 1 0 0 1 1 1ZM16.5 14.01V2.55a.5.5 0 0 0-1 0v11.46a2 2 0 0 0-1.5 1.93v1a2 2 0 0 0 1.5 1.93v2.58a.5.5 0 0 0 .5.5.51.51 0 0 0 .5-.5v-2.58a2 2 0 0 0 1.5-1.93v-1a2 2 0 0 0-1.5-1.93m.5 2.93a1.006 1.006 0 0 1-.98 1H16a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0Z" />
      </G>
    </Svg>
  );
};