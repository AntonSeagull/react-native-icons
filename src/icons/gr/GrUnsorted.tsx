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

export const GrUnsorted = (props: IconProps) => {
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
        <Path fill="#000" fillRule="evenodd" d="m15.204 15.321 1.597-1.597.707.707-2.45 2.45-.354.354-.353-.353-2.45-2.45.707-.708 1.596 1.597V7.217h1zm-5.9-6.407v8.104h1V8.914l1.597 1.597.707-.707-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};