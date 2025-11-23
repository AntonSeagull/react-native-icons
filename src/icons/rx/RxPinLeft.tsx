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

export const RxPinLeft = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2.05 13.5a.45.45 0 0 0 .9 0v-12a.45.45 0 1 0-.9 0zm6.382-2.432a.45.45 0 1 0 .636-.636L6.586 7.95H14.5a.45.45 0 0 0 0-.9H6.586l2.482-2.482a.45.45 0 1 0-.636-.636l-3.25 3.25a.45.45 0 0 0 0 .636z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};