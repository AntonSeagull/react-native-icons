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

export const DiWindows = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M13.821 15.761H4.783V8.014l9.038-1.291zm13.396 0H15.032V6.563l12.185-1.777zM13.821 16.81H4.783v7.747l9.038 1.291zm13.396 0H15.032v9.198l12.185 1.777z" />
      </G>
    </Svg>
  );
};