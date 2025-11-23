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

export const GiHealthDecrease = (props: IconProps) => {
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
        <Path d="M196 16c-16.62 0-30 13.38-30 30v120H46c-16.62 0-30 13.38-30 30v120c0 16.62 13.38 30 30 30h120v120c0 16.62 13.38 30 30 30h120c16.62 0 30-13.38 30-30V346h120c16.62 0 30-13.38 30-30V196c0-16.62-13.38-30-30-30H346V46c0-16.62-13.38-30-30-30zm0 135h120l-60 60zm0 75h120l-60 60zm0 75h120l-60 60z" />
      </G>
    </Svg>
  );
};