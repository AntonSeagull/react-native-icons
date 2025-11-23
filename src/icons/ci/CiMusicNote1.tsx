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

export const CiMusicNote1 = (props: IconProps) => {
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
        <Path d="M20.05 3.657a2.49 2.49 0 0 0-2.03-.56l-7.88 1.33a2.48 2.48 0 0 0-2.08 2.46v8.82a3 3 0 1 0 1 2.23v-8.55l10.88-1.83v6.22a2.94 2.94 0 0 0-2-.77 3 3 0 1 0 3 3V5.567a2.51 2.51 0 0 0-.89-1.91M6.06 19.937a2 2 0 1 1 2-2 1.993 1.993 0 0 1-2 2m11.88-1.93a2 2 0 1 1 2-2 2 2 0 0 1-2 2m2-11.46L9.06 8.377v-1.49a1.48 1.48 0 0 1 1.25-1.47l7.88-1.33a1.493 1.493 0 0 1 1.75 1.48Z" data-name="Music Note 1" />
      </G>
    </Svg>
  );
};