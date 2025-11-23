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

export const GoCheckboxFill = (props: IconProps) => {
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
        <Path d="M20.25 2c.966 0 1.75.783 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.783 2.783 2 3.75 2Zm-2.97 6.22a.75.75 0 0 0-1.06 0l-5.97 5.969-2.47-2.469a.749.749 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5a.75.75 0 0 0 0-1.06" />
      </G>
    </Svg>
  );
};