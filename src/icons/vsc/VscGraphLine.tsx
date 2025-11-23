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

export const VscGraphLine = (props: IconProps) => {
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
        <Path d="M15 13v1H1.5l-.5-.5V0h1v13z" />
        <Path d="M13 3.207 7.854 8.354h-.708L5.5 6.707l-3.646 3.647-.708-.708 4-4h.708L7.5 7.293l5.146-5.147h.707l2 2-.707.708z" />
      </G>
    </Svg>
  );
};