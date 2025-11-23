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

export const IoChevronCollapseSharp = (props: IconProps) => {
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
        <Path d="M102.145 108.514 256 241.855l153.855-133.341-31.437-36.273L256 178.337 133.582 72.241zm0 294.972L256 270.145l153.855 133.341-31.437 36.273L256 333.663 133.582 439.759z" />
      </G>
    </Svg>
  );
};