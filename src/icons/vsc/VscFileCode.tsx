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

export const VscFileCode = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m10.57 1.14 3.28 3.3.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72zM10 5h3l-3-3zM3 2v12h10V6H9.5L9 5.5V2zm2.062 7.533 1.817-1.828L6.17 7 4 9.179v.707l2.171 2.174.707-.707zM8.8 7.714l.7-.709 2.189 2.175v.709L9.5 12.062l-.705-.709 1.831-1.82z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};