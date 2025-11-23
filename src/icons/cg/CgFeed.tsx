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

export const CgFeed = (props: IconProps) => {
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
        <Path fill="currentColor" fillOpacity={0.5} d="M12.552 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM12.552 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
        <Path fill="currentColor" fillOpacity={0.8} d="M12.552 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM12.552 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
        <Path fill="currentColor" d="M3.448 4.002a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM3.448 12.998a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
      </G>
    </Svg>
  );
};