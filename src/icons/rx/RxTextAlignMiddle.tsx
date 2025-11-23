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

export const RxTextAlignMiddle = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3.5 14.9a.4.4 0 0 0 .4-.4v-4.034l1.317 1.317a.4.4 0 0 0 .565-.566l-2-2a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L3.1 10.466V14.5c0 .22.18.4.4.4M8 10.5a.5.5 0 0 0 .5.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 0 0-.5.5m0-3a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5M8.5 5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zM3.9.5a.4.4 0 0 0-.8 0v4.034L1.781 3.217a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566L3.899 4.534z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};