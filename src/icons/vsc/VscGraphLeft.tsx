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

export const VscGraphLeft = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M2.119 4 3 4.881l-.619.619L.715 3.833v-.618L2.38 1.548l.62.619L2.167 3H15v1zM4 14.546V5.455L4.5 5h2l.5.455v9.09L6.5 15h-2zm2-.455V5.909H5v8.182zm2-1.535V5.444L8.5 5h2l.5.444v7.112l-.5.444h-2zm2-.445V5.89H9v6.222zm2-6.682v5.143l.5.428h2l.5-.428V5.429L14.5 5h-2zm2 .428v4.286h-1V5.857z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};