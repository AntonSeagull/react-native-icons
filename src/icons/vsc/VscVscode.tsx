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

export const VscVscode = (props: IconProps) => {
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
        <Path d="M10.863 13.92a.805.805 0 0 1-.923-.159L4.816 9.063l-2.232 1.703a.54.54 0 0 1-.691-.031l-.716-.655a.547.547 0 0 1 0-.805L3.112 7.5 1.177 5.725a.547.547 0 0 1 0-.805l.716-.655a.54.54 0 0 1 .691-.03l2.232 1.702L9.94 1.24a.806.806 0 0 1 .923-.158l2.677 1.294c.281.136.46.422.46.736V8h-3.248V4.534L6.864 7.5l3.888 2.966V8H14v3.889c0 .314-.179.6-.46.736z" />
      </G>
    </Svg>
  );
};