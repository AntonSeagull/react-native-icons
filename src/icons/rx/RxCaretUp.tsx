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

export const RxCaretUp = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4.182 8.818a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1-.636.636L7.5 6.136 4.818 8.818a.45.45 0 0 1-.636 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};