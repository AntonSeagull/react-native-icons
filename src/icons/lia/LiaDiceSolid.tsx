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

export const LiaDiceSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 1 0 13l12 12 12-12zm0 2.8 9.2 9.2-9.2 9.2L2.8 13zM12 8a1 1 0 0 0 0 2 1 1 0 0 0 0-2m-4 4a1 1 0 0 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 0 0 0 2 1 1 0 0 0 0-2m10.8 1-2 2H30v12H18v-5.2l-2 2V29h16V13zM12 16a1 1 0 0 0 0 2 1 1 0 0 0 0-2m12 4a1 1 0 0 0 0 2 1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};