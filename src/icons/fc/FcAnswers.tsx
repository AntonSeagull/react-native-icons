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

export const FcAnswers = (props: IconProps) => {
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
        <Path fill="#42A5F5" d="M36 44H8V8h20l8 8z" />
        <Path fill="#90CAF9" d="M40 40H12V4h20l8 8z" />
        <Path fill="#E1F5FE" d="M38.5 13H31V5.5z" />
        <Path fill="#1976D2" d="M23.4 29.9c0-.2 0-.4.1-.6s.2-.3.3-.5.3-.2.5-.3.4-.1.6-.1.5 0 .7.1.4.2.5.3.2.3.3.5.1.4.1.6 0 .4-.1.6-.2.3-.3.5-.3.2-.5.3-.4.1-.7.1-.5 0-.6-.1-.4-.2-.5-.3-.2-.3-.3-.5-.1-.4-.1-.6m2.7-3.1h-2.3l-.4-9.8h3z" />
      </G>
    </Svg>
  );
};