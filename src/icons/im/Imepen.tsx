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

export const Imepen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m14.777 5.751-7-4.667a.5.5 0 0 0-.555 0l-7 4.667a.5.5 0 0 0-.223.416v4.667c0 .167.084.323.223.416l7 4.667a.5.5 0 0 0 .554 0l7-4.667a.5.5 0 0 0 .223-.416V6.167a.5.5 0 0 0-.223-.416zM7.5 10.232 4.901 8.5 7.5 6.768 10.099 8.5zM8 5.899V2.434l5.599 3.732L11 7.898zm-1 0-3 2-2.599-1.732L7 2.435zM3.099 8.5 1 9.899V7.101zM4 9.101l3 2v3.465l-5.599-3.732zm4 2 3-2 2.599 1.732L8 14.565zM11.901 8.5 14 7.101v2.798z" />
      </G>
    </Svg>
  );
};