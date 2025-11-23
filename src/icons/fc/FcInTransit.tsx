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

export const FcInTransit = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#FFC107" d="M44 36H30V16c0-1.1.9-2 2-2h8c.6 0 1.2.3 1.6.8l6 7.7c.3.4.4.8.4 1.2V32c0 2.2-1.8 4-4 4" />
        <Path d="M8 36h22V13c0-2.2-1.8-4-4-4H4v23c0 2.2 1.8 4 4 4" />
        <Path d="M0 9h10v2H0zM0 14h10v2H0zM0 19h10v2H0zM0 24h10v2H0z" />
        <Path d="M4 11h16v2H4zM4 16h12v2H4zM4 21h8v2H4zM4 26h4v2H4z" />
        <Circle cx={39} cy={36} r={5} />
        <Circle cx={16} cy={36} r={5} />
        <Circle cx={39} cy={36} r={2.5} />
        <Circle cx={16} cy={36} r={2.5} />
        <Path fill="#455A64" d="M44 26h-3.6c-.3 0-.5-.1-.7-.3l-1.4-1.4c-.2-.2-.4-.3-.7-.3H34c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h5.5c.3 0 .6.1.8.4l4.5 5.4c.1.2.2.4.2.6V25c0 .6-.4 1-1 1" />
      </G>
    </Svg>
  );
};