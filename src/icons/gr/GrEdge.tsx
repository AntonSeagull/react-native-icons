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

export const GrEdge = (props: IconProps) => {
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
        <Path fill="url(#b)" d="M21.666 17.873c-.32.165-.65.308-.991.44a9.6 9.6 0 0 1-3.369.606c-4.437 0-8.3-3.05-8.3-6.97 0-1.102.638-2.06 1.54-2.556-4.018.166-5.042 4.35-5.042 6.795 0 6.927 6.386 7.632 7.762 7.632.737 0 1.86-.22 2.532-.43a.5.5 0 0 0 .12-.044 12.07 12.07 0 0 0 6.243-4.956c.21-.319-.154-.704-.495-.517" />
        <Path fill="url(#c)" d="M9.908 22.641a7.4 7.4 0 0 1-2.136-2.004 7.62 7.62 0 0 1-1.42-4.449 7.62 7.62 0 0 1 2.896-6.002 7.7 7.7 0 0 1 1.288-.804c.297-.143.792-.385 1.453-.374 1.1.011 1.937.573 2.41 1.211a3.02 3.02 0 0 1 .595 1.751c0-.022 2.29-7.466-7.508-7.466C3.391 4.504 0 8.414 0 11.849c0 2.17.506 3.91 1.134 5.253a12.07 12.07 0 0 0 7.21 6.343 11.9 11.9 0 0 0 3.667.573c1.32 0 2.598-.22 3.798-.617a7.1 7.1 0 0 1-2.136.33 7.2 7.2 0 0 1-3.765-1.09" />
        <Path fill="url(#d)" d="M14.279 13.964c-.077.099-.309.23-.309.528 0 .242.154.485.44.683 1.355.936 3.887.815 3.898.815 1.046 0 1.992-.297 2.84-.782.386-.22.738-.496 1.057-.793 1.101-1.046 1.773-2.522 1.795-4.163.022-2.103-.75-3.502-1.068-4.118C20.95 2.235 16.668 0 12 0 5.427 0 .088 5.286 0 11.838c.044-3.425 3.446-6.2 7.497-6.2.33 0 2.202.033 3.941.947 1.53.804 2.334 1.773 2.896 2.742.583 1.002.682 2.269.682 2.764 0 .496-.264 1.256-.737 1.873" />
        <Defs>
        <LinearGradient id="b" x1={5.501} x2={22.225} y1={16.605} y2={16.605} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0C59A4" />
        <Stop offset={1} stopColor="#114A8B" />
        </LinearGradient>
        <LinearGradient id="c" x1={14.318} x2={3.868} y1={9.347} y2={20.726} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#1B9DE2" />
        <Stop offset={0.162} stopColor="#1595DF" />
        <Stop offset={0.667} stopColor="#0680D7" />
        <Stop offset={1} stopColor="#0078D4" />
        </LinearGradient>
        <RadialGradient id="d" cx={0} cy={0} r={1} gradientTransform="rotate(92.128 -.93 3.333)scale(18.9898 40.4341)" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#35C1F1" />
        <Stop offset={0.111} stopColor="#34C1ED" />
        <Stop offset={0.232} stopColor="#2FC2DF" />
        <Stop offset={0.315} stopColor="#2BC3D2" />
        <Stop offset={0.673} stopColor="#36C752" />
        <Stop offset={1} stopColor="#36C752" />
        </RadialGradient>
        <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
        </Defs>
      </G>
    </Svg>
  );
};