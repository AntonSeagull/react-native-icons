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

export const VscVr = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M4 3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-.394a3 3 0 0 1-1.665-.504l-.832-.555a2 2 0 0 0-2.218 0l-.832.555A3 3 0 0 1 4.394 13H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h.394a2 2 0 0 0 1.11-.336l.832-.555a3 3 0 0 1 3.328 0l.832.555a2 2 0 0 0 1.11.336H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" clipRule="evenodd" />
        <Path d="M0 7h1v3H0zM15 7h1v3h-1zM6.5 8a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1zM12 8a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1 0-1z" />
      </G>
    </Svg>
  );
};