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

export const LiaRandomSolid = (props: IconProps) => {
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
        <Path d="M23 3v4h-4.594l-.281.5-3.625 6.469L10.594 7H4v2h5.406l3.938 7-3.938 7H4v2h6.594l9-16H23v4l5-5Zm-6.219 15-1.156 2.063L18.406 25H23v4l5-5-5-5v4h-3.406Z" />
      </G>
    </Svg>
  );
};