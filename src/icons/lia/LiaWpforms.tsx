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

export const LiaWpforms = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h.535l5.065 4.3 3.4-3 3.4 3L24.465 7H25v18H7zm3.705 0h3.82L12.6 8.7zm6.77 0h3.82L19.4 8.7zM9 13v2h3v-2zm5 0v2h9v-2zm-5 4v2h3v-2zm5 0v2h9v-2zm4 4v2h5v-2z" />
      </G>
    </Svg>
  );
};