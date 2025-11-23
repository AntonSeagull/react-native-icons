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

export const TbBoxAlignTopLeftFilled = (props: IconProps) => {
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
        <Path d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M15 3a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zM20 3a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zM20 8a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zM20 14a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zM20 19a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zM15 19a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zM9 19a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zM4 19a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z" />
      </G>
    </Svg>
  );
};