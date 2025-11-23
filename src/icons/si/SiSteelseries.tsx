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

export const SiSteelseries = (props: IconProps) => {
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
        <Path d="M14.08 0a1.81 1.81 0 0 0-1.812 1.809V4.38c-4.02.744-7.195 3.912-7.94 7.92H1.812a1.808 1.808 0 1 0 0 3.615h2.516A9.926 9.926 0 0 0 14.08 24C19.55 24 24 19.561 24 14.107c0-4.836-3.5-8.875-8.107-9.726V1.809c0-1-.812-1.809-1.813-1.809M4.693 3.176a1.812 1.812 0 1 0 0 3.623A1.817 1.817 0 0 0 6.51 4.986c0-1-.816-1.81-1.817-1.81m9.387 4.656c3.468 0 6.293 2.814 6.293 6.275 0 3.46-2.825 6.278-6.293 6.278-3.47 0-6.293-2.818-6.293-6.278 0-3.461 2.824-6.275 6.293-6.275m-.017 2.404c-2.147 0-3.893 1.74-3.893 3.881S11.916 18 14.063 18a3.89 3.89 0 0 0 3.892-3.883 3.89 3.89 0 0 0-3.892-3.88m0 2.717a1.165 1.165 0 1 1 0 2.332c-.645 0-1.17-.525-1.17-1.168 0-.644.525-1.164 1.17-1.164" />
      </G>
    </Svg>
  );
};