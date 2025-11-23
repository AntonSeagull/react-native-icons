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

export const VscFeedback = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m4.5 1-.5.5v1.527a4.6 4.6 0 0 1 1 0V2h9v5h-1.707L11 8.293V7H8.973a4.6 4.6 0 0 1 0 1H10v1.5l.854.354L12.707 8H14.5l.5-.5v-6l-.5-.5z" />
        <Path fillRule="evenodd" d="M6.417 10.429a3.5 3.5 0 1 0-3.834 0A4.5 4.5 0 0 0 0 14.5v.5h1v-.5a3.502 3.502 0 0 1 7 0v.5h1v-.5a4.5 4.5 0 0 0-2.583-4.071M4.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" clipRule="evenodd" />
      </G>
    </Svg>
  );
};