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

export const LiaChessRookSolid = (props: IconProps) => {
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
        <Path d="M9 4v9h3.75l-.219 1h-.625c-.55.027-.98.496-.953 1.047s.496.98 1.047.953h.094l-1 4.563L10.375 22H8.906c-.55.027-.98.496-.953 1.047S8.45 24.027 9 24l-1.812 2.406-.188.25V29h18v-2.344l-.187-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.719-1.437-1-4.563H20c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-.531l-.219-1H23V4Zm2 2h2v3h2V6h2v3h2V6h2v5H11Zm3.781 7h2.438l.218 1h-2.875Zm-.656 3h3.75l1.156 5.219.032.125.03.093.282.563h-6.75l.281-.562.031-.094.032-.125ZM11.5 24h9l2.25 3H9.25Z" />
      </G>
    </Svg>
  );
};