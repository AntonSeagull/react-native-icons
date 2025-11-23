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

export const GrDocumentImage = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M4.998 7V1H19.5L23 4.5V23h-3M18 1v5h5M3 11h13v12H3zm4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 7 2-3 2 2 4-6 3 4" />
      </G>
    </Svg>
  );
};