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

export const RiCodeView = (props: IconProps) => {
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
        <Path d="m16.95 8.464 1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95z" />
      </G>
    </Svg>
  );
};