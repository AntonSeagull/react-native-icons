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

export const TfiPlug = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 4v5.014C3 11.763 5.468 14 8.5 14S14 11.763 14 9.014V4zm10 5.014C13 11.212 10.981 13 8.5 13S4 11.212 4 9.014V5h9zM7.016 3h-1V0h1zm3.968 0h-1V0h1zM8 14h1v3H8zm3-6H6V7h5zm0 2H6V9h5z" />
      </G>
    </Svg>
  );
};