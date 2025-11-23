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

export const VscMortarBoard = (props: IconProps) => {
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
        <Path d="M15 5.66 8.18 3h-.36L1 5.66V12h1V7l2.31.9a4.35 4.35 0 0 0-.79 2.48q-.015.165 0 .33v.11l.28.4L7.78 13h.41l3.94-1.81.28-.4v-.44a4.4 4.4 0 0 0-.78-2.47L15 6.57zm-3.52 4.68v.07L8 12l-3.5-1.6a.13.13 0 0 1 0-.06 3.44 3.44 0 0 1 .75-2.12l2.58 1h.36l2.56-1a3.4 3.4 0 0 1 .73 2.12M8 8.25 2.52 6.12 8 4l5.48 2.14z" />
      </G>
    </Svg>
  );
};