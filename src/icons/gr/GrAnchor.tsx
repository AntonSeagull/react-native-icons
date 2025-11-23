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

export const GrAnchor = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-11v15m-8-5.027Q7.29 21 12 21t8-5.027M16 10H8" />
      </G>
    </Svg>
  );
};