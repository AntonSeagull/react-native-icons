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

export const LiaDrawPolygonSolid = (props: IconProps) => {
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
        <Path d="M14 4c-1.105 0-2 .895-2 2v.063L6.938 9.25A2 2 0 0 0 6 9c-1.105 0-2 .895-2 2 0 .738.402 1.371 1 1.719V24.28c-.598.348-1 .98-1 1.719 0 1.105.895 2 2 2 .738 0 1.371-.402 1.719-1H20.28c.348.598.98 1 1.719 1 1.105 0 2-.895 2-2 0-.398-.11-.781-.312-1.094L26.125 20a2.005 2.005 0 0 0 .25-3.969l-1.906-5.718C24.785 9.957 25 9.512 25 9c0-1.105-.895-2-2-2-.512 0-.957.215-1.312.531l-5.72-1.937A2.01 2.01 0 0 0 14 4m1.313 3.5 5.718 1.875c.153.805.79 1.441 1.594 1.594l1.906 5.687A2 2 0 0 0 24 18c0 .414.129.805.344 1.125L21.875 24a1.99 1.99 0 0 0-1.594 1H7.72A2 2 0 0 0 7 24.281V12.72c.598-.348 1-.98 1-1.719v-.062l5.063-3.188c.28.148.597.25.937.25.504 0 .96-.191 1.313-.5" />
      </G>
    </Svg>
  );
};