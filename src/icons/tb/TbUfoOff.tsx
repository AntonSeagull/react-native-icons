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

export const TbUfoOff = (props: IconProps) => {
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
        <Path d="M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714 0 1.08-.931 2.063-2.468 2.814m-3 1c-1.36.295-2.9.462-4.531.462-5.52 0-10-1.909-10-4.276 0-1.59 2.04-2.985 5.07-3.724" />
        <Path d="M14.69 10.686C16.078 10.331 17 9.71 17 9v-.035C17 6.223 14.761 4 12 4c-1.125 0-2.164.37-3 .992M7.293 7.289A4.9 4.9 0 0 0 7 8.965V9c0 .961 1.696 1.764 3.956 1.956M15 17l2 3M8.5 17 7 20M12 14h.01M7 13h.01M17 13h.01M3 3l18 18" />
      </G>
    </Svg>
  );
};