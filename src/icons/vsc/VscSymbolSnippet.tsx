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

export const VscSymbolSnippet = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m2.5 1-.5.5V13h1V2h11v11h1V1.5l-.5-.5zM2 15v-1h1v1zm3-1H4v1h1zm1 0h1v1H6zm3 0H8v1h1zm1 0h1v1h-1zm5 1v-1h-1v1zm-3-1h1v1h-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};