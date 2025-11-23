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

export const TiWiFi = (props: IconProps) => {
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
        <Path d="M13.414 19.412a1.994 1.994 0 0 0 0-2.826 1.994 1.994 0 0 0-2.828-.002 2 2 0 1 0 2.828 2.828m7.071-7.897a2 2 0 0 1-1.414-.586c-3.899-3.899-10.243-3.898-14.143 0A2 2 0 0 1 2.099 8.1c5.459-5.458 14.341-5.458 19.799 0a2 2 0 0 1-1.413 3.415M7.757 15.757a2 2 0 0 1-1.414-3.414c3.118-3.119 8.194-3.119 11.313 0a2 2 0 0 1-2.829 2.829 4.005 4.005 0 0 0-5.657 0 2 2 0 0 1-1.413.585" />
      </G>
    </Svg>
  );
};