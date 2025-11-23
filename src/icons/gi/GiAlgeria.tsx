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

export const GiAlgeria = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M418.4 23.98c-87.5-7.58-164.6 2.58-228 35.99l11.3 83.23-181.56 71.3-5.99 43.4L294.5 490.4l57-2.2 146.4-114c-60.4-73.4-22.3-118.9-45.6-161.2-48-86.8-45.2-133.74-33.9-189.02" />
      </G>
    </Svg>
  );
};