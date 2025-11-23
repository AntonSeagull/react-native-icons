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

export const CiShoppingBasket = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M19.44 7.937H17.3l-1.21-4.51a.51.51 0 0 0-.61-.35.49.49 0 0 0-.35.61l1.14 4.25H7.74l1.14-4.25a.5.5 0 0 0-.36-.61.513.513 0 0 0-.61.35l-1.2 4.51H4.56a1.5 1.5 0 0 0-.32 2.96l.74 7.77a2.49 2.49 0 0 0 2.49 2.27h9.06a2.49 2.49 0 0 0 2.49-2.27l.74-7.77a1.5 1.5 0 0 0-.32-2.96m-1.41 10.64a1.5 1.5 0 0 1-1.5 1.36H7.47a1.5 1.5 0 0 1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h14.88a.5.5 0 0 1 .5.5.51.51 0 0 1-.5.5" />
        <Path d="M9.5 17.432a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5M14.5 17.432a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5" />
      </G>
    </Svg>
  );
};