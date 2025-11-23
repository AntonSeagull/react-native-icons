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

export const FcAndroidOs = (props: IconProps) => {
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
        <Path fill="#7CB342" d="M12 29.001a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0zM40 29.001a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0zM22 40a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0zM30 40a2 2 0 0 1-4 0v-9a2 2 0 0 1 4 0z" />
        <Path fill="#7CB342" d="M14 18.001V33a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V18.001zM24 8c-6 0-9.655 3.645-10 8h20c-.346-4.355-4-8-10-8m-4 5.598a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
        <Path fill="none" stroke="#7CB342" strokeLinecap="round" strokeWidth={2} d="m30 7-1.666 2.499M18 7l1.333 2.082" />
      </G>
    </Svg>
  );
};