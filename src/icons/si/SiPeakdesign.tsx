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

export const SiPeakdesign = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m24 10.523-9.446 6.493-4.74-3.271 4.723-3.255 3.738 2.57 3.705-2.537zm-6.743 3.255-2.72-1.886-2.704 1.853 2.737 1.869zm-7.794-.284-3.738-2.57-3.706 2.554H0l9.43-6.493 4.756 3.255zM6.726 10.24l2.737 1.869 2.704-1.869L9.43 8.37z" />
      </G>
    </Svg>
  );
};