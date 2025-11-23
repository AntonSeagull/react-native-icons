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

export const RxContainer = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5 13h5V2H5zm-1 0a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm9.5-11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};