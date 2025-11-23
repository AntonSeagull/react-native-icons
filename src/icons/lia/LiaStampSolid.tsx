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

export const LiaStampSolid = (props: IconProps) => {
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
        <Path d="M16 2.906a5.945 5.945 0 0 0-5.937 5.938c0 1.945.906 3.324 1.656 4.375.75 1.05 1.281 1.773 1.281 2.812v3.188L4.781 21.03 4 21.188V26h1v1c0 .574.254 1.117.656 1.469.403.351.918.531 1.438.531h17.812c.52 0 1.035-.18 1.438-.531.402-.352.656-.895.656-1.469v-1h1v-4.812l-.781-.157L19 19.22V16.03c0-1.039.531-1.761 1.281-2.812s1.657-2.43 1.657-4.375A5.945 5.945 0 0 0 16 2.906m0 2a3.91 3.91 0 0 1 3.938 3.938c0 1.351-.555 2.199-1.282 3.219C17.93 13.082 17 14.285 17 16.03V19h-2v-2.969c0-1.746-.93-2.949-1.656-3.968-.727-1.02-1.281-1.868-1.281-3.22A3.91 3.91 0 0 1 16 4.907M14 21h4l8 1.781V24H6v-1.219Zm-7 5h18v.969c-.012.008-.027.031-.094.031H7.094c-.067 0-.082-.023-.094-.031Z" />
      </G>
    </Svg>
  );
};