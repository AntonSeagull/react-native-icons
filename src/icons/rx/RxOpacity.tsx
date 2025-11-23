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

export const RxOpacity = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.5 1.5C4.5 4.25 3 6.5 3 9a4.5 4.5 0 1 0 9 0c0-2.5-1.5-4.75-4.5-7.5M11 9c0-1.888-1.027-3.728-3.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 1 0 7 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};