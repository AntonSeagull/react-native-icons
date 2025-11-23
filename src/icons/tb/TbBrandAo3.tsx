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

export const TbBrandAo3 = (props: IconProps) => {
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
        <Path d="M2 5c7.109 4.1 10.956 10.131 12 14 1.074-4.67 4.49-8.94 8-11" />
        <Path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 9c-.278 5.494-2.337 7.33-4 10 4.013-2 6.02-5 15.05-5 4.012 0 3.51 2.5 1 3 2 .5 2.508 5-2.007 2" />
      </G>
    </Svg>
  );
};