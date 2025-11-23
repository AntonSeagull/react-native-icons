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

export const DiStackoverflow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M6.08 23.835v5.32h16.767V18.482l-.871.097-.903.097-.097 4.417-.097 4.45H7.691v-9.028H6.079zm2.902.806v.967H19.3v-1.935H8.982v.967zm.155-3.809-.105.962 10.257 1.118.21-1.923-10.257-1.118zm.771-4.55-.251.934 9.965 2.676.502-1.868-9.965-2.676zm2.116-5.304-.515.819 8.734 5.494 1.03-1.638-8.734-5.494zm4.941-4.94-.797.549 5.853 8.498 1.593-1.097-5.853-8.498-.797.549zm6.448-2.489-.951.177 1.893 10.143 1.902-.355-1.892-10.143-.951.177z" />
      </G>
    </Svg>
  );
};