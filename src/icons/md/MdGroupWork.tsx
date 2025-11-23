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

export const MdGroupWork = (props: IconProps) => {
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
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" />
      </G>
    </Svg>
  );
};