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

export const LiaPenSolid = (props: IconProps) => {
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
        <Path d="M23.906 3.969A4.1 4.1 0 0 0 21 5.188L5.188 21l-.063.313-1.094 5.5-.312 1.468 1.469-.312 5.5-1.094.312-.062L26.813 11a4.075 4.075 0 0 0 0-5.812 4.1 4.1 0 0 0-2.907-1.22m0 1.906c.504 0 1.012.23 1.5.719.973.972.973 2.027 0 3l-.718.687-2.97-2.969.688-.718c.489-.489.996-.719 1.5-.719m-3.593 2.844 2.968 2.969L11.188 23.78a6.8 6.8 0 0 0-2.97-2.968ZM6.938 22.438a4.73 4.73 0 0 1 2.625 2.625l-3.282.656Z" />
      </G>
    </Svg>
  );
};