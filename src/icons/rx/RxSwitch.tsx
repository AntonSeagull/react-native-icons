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

export const RxSwitch = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M10.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-2.829 7A4.5 4.5 0 0 1 6 7.5c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 1 0 0 7zM0 7.5A4.5 4.5 0 0 1 4.5 3h6a4.5 4.5 0 1 1 0 9h-6A4.5 4.5 0 0 1 0 7.5" clipRule="evenodd" />
      </G>
    </Svg>
  );
};