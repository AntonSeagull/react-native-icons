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

export const LiaAddressCard = (props: IconProps) => {
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
        <Path d="M3 6v20h26V6Zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.437C23.06 23.183 22.524 23 22 23s-1.059.184-1.437.563c-.114.113-.079.3-.157.437h-8.812c-.078-.137-.043-.324-.156-.437-.38-.38-.915-.563-1.438-.563s-1.059.184-1.437.563c-.114.113-.079.3-.157.437H5Zm7 2c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 7 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2m7 1v2h6v-2Zm0 4v2h6v-2Z" />
      </G>
    </Svg>
  );
};