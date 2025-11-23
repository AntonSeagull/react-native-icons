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

export const TbBrandFlipboard = (props: IconProps) => {
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
        <Path d="M3.973 3h16.054c.537 0 .973.436.973.973v4.052a.973.973 0 0 1-.973.973h-5.025v4.831c0 .648-.525 1.173-1.173 1.173H9v5.025a.973.973 0 0 1-.974.973H3.973A.973.973 0 0 1 3 20.027V3.973C3 3.436 3.436 3 3.973 3" />
      </G>
    </Svg>
  );
};