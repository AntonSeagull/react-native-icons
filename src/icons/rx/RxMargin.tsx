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

export const RxMargin = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M1.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M1.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0h5v5H5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};