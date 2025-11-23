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

export const CiText = (props: IconProps) => {
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
        <Path d="M18.44 2.06H5.56a1.5 1.5 0 0 0-1.5 1.5v4.5a.5.5 0 0 0 1 0v-1H10v13.88H8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-2V7.06h4.94v1a.5.5 0 0 0 1 0v-4.5a1.5 1.5 0 0 0-1.5-1.5m.5 4H14a1 1 0 0 0-1 1v13.88h-2V7.06a1 1 0 0 0-1-1H5.06v-2.5a.5.5 0 0 1 .5-.5h12.88a.5.5 0 0 1 .5.5Z" />
      </G>
    </Svg>
  );
};