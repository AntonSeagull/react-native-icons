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

export const BiSolidLeftDownArrowCircle = (props: IconProps) => {
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
        <Path d="M19.071 19.071c3.898-3.899 3.898-10.244 0-14.143s-10.244-3.898-14.143 0c-3.898 3.899-3.899 10.243 0 14.143 3.9 3.899 10.244 3.899 14.143 0M8.464 8.464l2.829 2.829 3.535-3.536 1.414 1.414-3.535 3.536 2.828 2.829H8.464z" />
      </G>
    </Svg>
  );
};