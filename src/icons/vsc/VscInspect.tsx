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

export const VscInspect = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m1 3 1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1zm14.707 9.707L9 6v9.414l2.707-2.707zM10 13V8.414l3.293 3.293h-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};