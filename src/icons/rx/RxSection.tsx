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

export const RxSection = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M2 5v5h11V5zm0-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M7.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M14 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};