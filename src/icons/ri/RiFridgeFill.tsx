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

export const RiFridgeFill = (props: IconProps) => {
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
        <Path d="M19.998 12v10a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V12zm-11 2h-2v5h2zm10-13a1 1 0 0 1 1 1v8h-16V2a1 1 0 0 1 1-1zm-10 3h-2v4h2z" />
      </G>
    </Svg>
  );
};