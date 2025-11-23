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

export const VscSymbolVariable = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M2 5h2V4H1.5l-.5.5v8l.5.5H4v-1H2zm12.5-1H12v1h2v7h-2v1h2.5l.5-.5v-8zm-2.74 2.57L12 7v2.51l-.3.45-4.5 2h-.46l-2.5-1.5-.24-.43v-2.5l.3-.46 4.5-2h.46zM5 9.71l1.5.9V9.28L5 8.38zm.58-2.15 1.45.87 3.39-1.5-1.45-.87zm1.95 3.17 3.5-1.56v-1.4l-3.5 1.55z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};