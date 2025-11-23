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

export const CiMug1 = (props: IconProps) => {
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
        <Path d="M18.115 5.91v-.94a1.2 1.2 0 0 0-1.2-1.2H4.265a1.2 1.2 0 0 0-1.2 1.2v9.14a11.3 11.3 0 0 0 .8 4.17A3.3 3.3 0 0 0 7 20.23h7.19a3.31 3.31 0 0 0 3.14-1.95 11 11 0 0 0 .74-3.13l1.04-.52a3.32 3.32 0 0 0 1.83-2.97V9.19a3.326 3.326 0 0 0-2.825-3.28m-1.73 12.01a2.3 2.3 0 0 1-2.2 1.31H7a2.31 2.31 0 0 1-2.2-1.31 10.2 10.2 0 0 1-.73-3.81V4.97a.2.2 0 0 1 .2-.2h12.65a.2.2 0 0 1 .2.2v9.14a10.2 10.2 0 0 1-.735 3.81m3.55-6.26a2.29 2.29 0 0 1-1.28 2.07l-.54.27V6.93a2.316 2.316 0 0 1 1.82 2.26Z" data-name="Mug 1" />
      </G>
    </Svg>
  );
};