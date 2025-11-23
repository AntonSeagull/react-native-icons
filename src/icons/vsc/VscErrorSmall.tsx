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

export const VscErrorSmall = (props: IconProps) => {
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
        <Path d="M9.177 10.105 8 8.928l-1.177 1.177-.928-.928L7.072 8 5.895 6.823l.928-.928L8 7.072l1.177-1.177.928.928L8.928 8l1.177 1.177z" />
        <Path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
      </G>
    </Svg>
  );
};