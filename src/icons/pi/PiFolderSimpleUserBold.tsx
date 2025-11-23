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

export const PiFolderSimpleUserBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M220.51 197.94a36 36 0 1 0-57 0 43.75 43.75 0 0 0-15.08 23 12 12 0 0 0 8.52 14.67 11.8 11.8 0 0 0 3.05.39 12 12 0 0 0 11.59-8.92C174 218.2 182.35 212 192 212s18 6.2 20.4 15.08a12 12 0 0 0 23.19-6.17 43.7 43.7 0 0 0-15.08-22.97M192 164a12 12 0 1 1-12 12 12 12 0 0 1 12-12m44-76v20a12 12 0 0 1-24 0V92h-81.33a20.1 20.1 0 0 1-12-4L92 68H44v128h68a12 12 0 0 1 0 24H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};