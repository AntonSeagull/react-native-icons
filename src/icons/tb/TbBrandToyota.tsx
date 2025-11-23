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

export const TbBrandToyota = (props: IconProps) => {
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
        <Path d="M2 12a10 7 0 1 0 20 0 10 7 0 1 0-20 0" />
        <Path d="M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7-1.343-7-3-7-3 3.134-3 7" />
        <Path d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806" />
      </G>
    </Svg>
  );
};