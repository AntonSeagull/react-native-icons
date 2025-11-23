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

export const RiMenuUnfold2Line = (props: IconProps) => {
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
        <Path d="M20.596 3.903 15.999 8.5l4.597 4.596 1.414-1.415L18.828 8.5l3.182-3.182zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z" />
      </G>
    </Svg>
  );
};