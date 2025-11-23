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

export const RxDrawingPinFilled = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707" clipRule="evenodd" />
        <Path fill="currentColor" fillRule="evenodd" d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707" clipRule="evenodd" />
      </G>
    </Svg>
  );
};