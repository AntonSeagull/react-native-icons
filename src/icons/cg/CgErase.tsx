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

export const CgErase = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3.5 12.9a2 2 0 0 0 0 2.828l3.858 3.858H4.086a1 1 0 1 0 0 2h16a1 1 0 0 0 0-2h-9.13l9.515-9.515a2 2 0 0 0 0-2.828L16.228 3a2 2 0 0 0-2.829 0zm4.326-1.498-2.912 2.912 4.243 4.242 2.911-2.911zM9.24 9.988l4.243 4.243 5.573-5.574-4.242-4.243z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};