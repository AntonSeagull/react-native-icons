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

export const TfiSignal = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.5 4c0-1.654-1.346-3-3-3s-3 1.346-3 3A3 3 0 0 0 8 6.949V15H6v1h5v-1H9V6.949A3 3 0 0 0 11.5 4m-5 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M4.504 2.192c-.378.46-.577 1.004-.577 1.574s.199 1.114.577 1.574l-.774.636c-.525-.641-.803-1.405-.803-2.209s.278-1.569.803-2.209zM2 3.767c0 1.079.387 2.096 1.119 2.938l-.754.656C1.484 6.349 1 5.071 1 3.767S1.484 1.185 2.365.172l.754.656C2.387 1.671 2 2.688 2 3.767m12.073 0a3.45 3.45 0 0 1-.804 2.209l-.773-.635c.378-.46.577-1.004.577-1.574s-.199-1.114-.577-1.574l.773-.635c.526.64.804 1.404.804 2.209m1.927 0a5.5 5.5 0 0 1-1.365 3.595l-.754-.656C14.613 5.862 15 4.846 15 3.767s-.387-2.096-1.119-2.938l.754-.656A5.49 5.49 0 0 1 16 3.767" />
      </G>
    </Svg>
  );
};