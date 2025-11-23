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

export const VscItalic = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m9.001 13.593-.097.325H4l.123-.325q.738-.018.976-.123.386-.15.57-.413.291-.414.599-1.477l2.074-7.19q.264-.895.263-1.353a.64.64 0 0 0-.114-.387.7.7 0 0 0-.351-.237q-.229-.088-.906-.088L7.34 2h4.605l-.096.325q-.563-.009-.835.123a1.36 1.36 0 0 0-.607.501q-.201.325-.527 1.442l-2.066 7.19q-.28.992-.28 1.265 0 .219.105.378.114.15.351.237.246.08 1.011.132" />
      </G>
    </Svg>
  );
};