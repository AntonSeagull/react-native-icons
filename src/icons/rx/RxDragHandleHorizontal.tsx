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

export const RxDragHandleHorizontal = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M2.5 4.1a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm0 2a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1-.4-.4m.4 1.6a.4.4 0 0 0 0 .8h10a.4.4 0 0 0 0-.8z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};