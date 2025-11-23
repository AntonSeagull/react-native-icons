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

export const TbScaleOutlineOff = (props: IconProps) => {
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
        <Path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.99 3.99 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827" />
        <Path d="M11.062 7.062Q11.527 7 12 7c1.956 0 3.724.802 5 2.095A143 143 0 0 0 15 11m-3.723.288a3 3 0 0 0-1.315.71L7.006 9.095a7 7 0 0 1 1.142-.942M3 3l18 18" />
      </G>
    </Svg>
  );
};