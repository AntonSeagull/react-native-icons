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

export const VscCombine = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m1.5 1-.5.5v3l.5.5h3l.5-.5v-3L4.5 1zM2 4V2h2v2zm-.5 2-.5.5v3l.5.5h3l.5-.5v-3L4.5 6zM2 9V7h2v2zm-1 2.5.5-.5h3l.5.5v3l-.5.5h-3l-.5-.5zm1 .5v2h2v-2zm10.5-7-.5.5v6l.5.5h3l.5-.5v-6l-.5-.5zM15 8h-2V6h2zm0 3h-2V9h2zM9.1 8H6v1h3.1l-1 1 .7.6 1.8-1.8v-.7L8.8 6.3l-.7.7z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};