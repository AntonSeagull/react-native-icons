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

export const CiTurnR1 = (props: IconProps) => {
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
        <Path d="M3.061 9.509v10.93a.51.51 0 0 0 .5.5.5.5 0 0 0 .5-.5V9.509a3.5 3.5 0 0 1 3.5-3.5h9.9l.01 1.44a.5.5 0 0 0 .81.4l2.47-1.96a.5.5 0 0 0 0-.78l-2.49-1.94a.5.5 0 0 0-.81.4l.01 1.44h-9.9a4.507 4.507 0 0 0-4.5 4.5" data-name="Turn R 1" />
      </G>
    </Svg>
  );
};