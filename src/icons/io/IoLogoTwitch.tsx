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

export const IoLogoTwitch = (props: IconProps) => {
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
        <Path d="m80 32-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256-64 64h-96l-64 64v-64h-80V80h304Z" />
        <Path d="M320 143h48v129h-48zM208 143h48v129h-48z" />
      </G>
    </Svg>
  );
};