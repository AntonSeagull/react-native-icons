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

export const RxMixerHorizontal = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M3 5q.025 0 .05-.002a2.5 2.5 0 0 0 4.9 0L8 5h5.5a.5.5 0 0 0 0-1H8q-.025 0-.05.002a2.5 2.5 0 0 0-4.9 0L3 4H1.5a.5.5 0 0 0 0 1zm8.95 5.998a2.5 2.5 0 0 1-4.9 0L7 11H1.5a.5.5 0 0 1 0-1H7q.025 0 .05.002a2.5 2.5 0 0 1 4.9 0L12 10h1.5a.5.5 0 0 1 0 1H12q-.025 0-.05-.002M8 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};