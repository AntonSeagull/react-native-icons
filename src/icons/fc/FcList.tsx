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

export const FcList = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 22h4v4H6zM6 14h4v4H6zM6 30h4v4H6zM6 6h4v4H6zM6 38h4v4H6z" />
        <Path d="M14 22h28v4H14zM14 14h28v4H14zM14 30h28v4H14zM14 6h28v4H14zM14 38h28v4H14z" />
      </G>
    </Svg>
  );
};