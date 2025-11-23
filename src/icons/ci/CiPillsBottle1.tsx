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

export const CiPillsBottle1 = (props: IconProps) => {
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
        <Path d="M17.435 2.06H6.565a2.5 2.5 0 0 0-2.5 2.5v2a1.49 1.49 0 0 0 1.22 1.47v11.41a2.5 2.5 0 0 0 2.5 2.5h8.43a2.5 2.5 0 0 0 2.5-2.5V8.03a1.49 1.49 0 0 0 1.22-1.47v-2a2.5 2.5 0 0 0-2.5-2.5m.28 17.38a1.5 1.5 0 0 1-1.5 1.5h-8.43a1.5 1.5 0 0 1-1.5-1.5v-.88h3.52a.49.49 0 0 0 .48-.5.485.485 0 0 0-.48-.5h-3.52V15h2.57a.5.5 0 0 0 0-1h-2.57v-2.55h3.52a.49.49 0 0 0 .48-.5.485.485 0 0 0-.48-.5h-3.52V8.06h11.43Zm1.22-12.88a.5.5 0 0 1-.5.5H5.565a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 1 1.5-1.5h10.87a1.5 1.5 0 0 1 1.5 1.5Z" data-name="Prescription Bottle 1" />
      </G>
    </Svg>
  );
};