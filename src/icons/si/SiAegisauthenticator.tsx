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

export const SiAegisauthenticator = (props: IconProps) => {
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
        <Path d="m6.949 19.873-.008.013a1.48 1.48 0 0 0-.001 1.47l.317.556c.263.464.756.75 1.29.75h.016a1.483 1.483 0 0 0 1.288-2.219l-.325-.57a1.484 1.484 0 0 0-2.577 0m3.49-6.107a1.48 1.48 0 0 0-.001 1.469l3.796 6.676c.264.464.756.75 1.29.75h.016a1.483 1.483 0 0 0 1.288-2.218l-3.812-6.677a1.484 1.484 0 0 0-2.577 0m.328-11.692L.197 20.464a1.466 1.466 0 0 0 1.272 2.198 1.47 1.47 0 0 0 1.273-.74l7.951-13.928a1.466 1.466 0 0 1 2.548.003L21.16 21.92a1.47 1.47 0 0 0 1.274.742h.099a1.466 1.466 0 0 0 1.273-2.193L13.312 2.078a1.466 1.466 0 0 0-2.545-.004" />
      </G>
    </Svg>
  );
};