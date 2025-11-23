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

export const SiCmake = (props: IconProps) => {
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
        <Path d="M11.769.066.067 23.206l12.76-10.843zm11.438 23.868L7.471 17.587 0 23.934zm.793-.198L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298 5.62 2.248z" />
      </G>
    </Svg>
  );
};