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

export const RiSortNumberDesc = (props: IconProps) => {
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
        <Path d="M9 11V3H7.314L5 3.62v2.329l2-.539V11zm13-3-4-5-4 5h3v13h2V8zM8 16.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2.573.544a3 3 0 1 0-3.121 1.406L5.979 21h2.31z" />
      </G>
    </Svg>
  );
};