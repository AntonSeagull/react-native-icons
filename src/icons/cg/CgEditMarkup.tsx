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

export const CgEditMarkup = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.58-4.469A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 0 0 3.333 7.453L7 10.973h2.17l2.83-4.9 2.83 4.9H17zm-2.488 1.596-.886-8.153H8.794l-.886 8.153A10 10 0 0 0 12 22a10 10 0 0 0 4.092-.873" clipRule="evenodd" />
      </G>
    </Svg>
  );
};