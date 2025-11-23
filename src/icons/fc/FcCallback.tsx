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

export const FcCallback = (props: IconProps) => {
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
        <Path fill="#2196F3" d="M26.4 33.9s4-2.6 4.8-3 1.7-.6 2.2-.2c.8.5 7.5 4.9 8.1 5.3s.8 1.5.1 2.6c-.8 1.1-4.3 5.5-5.8 5.4-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1s4.8 7.3 5.3 8.1c.3.5.2 1.4-.2 2.2s-3 4.8-3 4.8.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5" />
        <Path d="M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6" />
        <Path d="m28 16-6.7-5L28 6z" />
      </G>
    </Svg>
  );
};