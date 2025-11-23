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

export const LiaPhoneSquareAltSolid = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm13.127 2c-.512 0-.993.199-1.354.56l-1.15 1.15c-.723.724-.723 1.986 0 2.71l1.707 1.707a14.3 14.3 0 0 1-1.809 2.154l-.251.25a14 14 0 0 1-2.147 1.801l-1.707-1.707a1.9 1.9 0 0 0-1.354-.56c-.51 0-.992.198-1.355.56l-1.15 1.152a1.92 1.92 0 0 0 .002 2.707l.953.955c.528.526 1.29.7 1.986.454l.13-.043c.504-.165 1.683-.552 3.55-1.813a16 16 0 0 0 2.515-2.098l.235-.234a16.3 16.3 0 0 0 2.105-2.521c1.261-1.87 1.647-3.048 1.813-3.551l.043-.131a1.9 1.9 0 0 0-.455-1.986l-.954-.955A1.9 1.9 0 0 0 20.127 9" />
      </G>
    </Svg>
  );
};