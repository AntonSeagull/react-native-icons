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

export const TbSkewX = (props: IconProps) => {
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
        <Path d="M4 5.205v13.59a1 1 0 0 0 1.184.983l14-2.625A1 1 0 0 0 20 16.17V7.83a1 1 0 0 0-.816-.983l-14-2.625A1 1 0 0 0 4 5.205" />
      </G>
    </Svg>
  );
};