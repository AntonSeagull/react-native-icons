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

export const RxLockOpen2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M9 3.636c0-.876.242-1.524.642-1.95.395-.421 1.001-.686 1.86-.686.946 0 1.582.306 1.97.806.331.427.528 1.037.528 1.827h1c0-.95-.237-1.794-.738-2.44C13.64.39 12.674 0 11.503 0c-1.073 0-1.967.338-2.59 1.002C8.294 1.662 8 2.582 8 3.636V6H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9zM1 7h9v6H1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};