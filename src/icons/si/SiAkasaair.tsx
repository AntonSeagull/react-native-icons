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

export const SiAkasaair = (props: IconProps) => {
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
        <Path d="M14.732 1.8c-2.297 0-3.271.731-4.165 2.383l-.63 1.116a3.2 3.2 0 0 0-.529 1.482c.026.43.166.845.407 1.202l5.002 8.944c1.789 3.197 4 4.986 8.764 4.986.407 0 .508-.244.344-.53l-6.488-11.59c-1.297-2.34-1.747-4.027-1.747-5.245a3.53 3.53 0 0 1 .814-2.425c.122-.137.101-.322-.142-.322Zm-6.92 7.056c-.122 0-.2.084-.323.285L.08 21.71a.4.4 0 0 0-.079.244c0 .244.386.245.487.245 5.335 0 9.04-3.256 9.04-7.972A10.06 10.06 0 0 0 8.12 9.121c-.1-.158-.185-.265-.307-.265Z" />
      </G>
    </Svg>
  );
};