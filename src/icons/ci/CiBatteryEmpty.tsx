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

export const CiBatteryEmpty = (props: IconProps) => {
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
        <Path d="M17.505 18.5H4.065a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h13.44a2 2 0 0 1 2 2v1h.93a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-.93v1a2 2 0 0 1-2 2m-13.44-12a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13.44a1 1 0 0 0 1-1v-1.25a.75.75 0 0 1 .75-.75h1.18a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1.18a.75.75 0 0 1-.75-.75V7.5a1 1 0 0 0-1-1Z" data-name="Battery Empty" />
      </G>
    </Svg>
  );
};