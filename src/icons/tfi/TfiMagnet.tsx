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

export const TfiMagnet = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11 0v10.122c0 1.329-1.122 2.409-2.5 2.409S6 11.451 6 10.122V0H1v10.432C1 14.698 4.864 17 8.5 17s7.5-2.302 7.5-6.568V0zm4 1v3h-3V1zM5 1v3H2V1zm3.5 15C5.887 16 2 14.517 2 10.432V5h3v5.122c0 1.88 1.57 3.409 3.5 3.409s3.5-1.529 3.5-3.409V5h3v5.432C15 14.517 11.113 16 8.5 16" />
      </G>
    </Svg>
  );
};