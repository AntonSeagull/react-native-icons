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

export const LiaBoxesSolid = (props: IconProps) => {
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
        <Path d="M10 4v11h12V4zm2 2h2v4l2-2 2 2V6h2v7h-8zM3 17v11h12V17zm14 0v11h12V17zM5 19h2v4l2-2 2 2v-4h2v7H5zm14 0h2v4l2-2 2 2v-4h2v7h-8z" />
      </G>
    </Svg>
  );
};