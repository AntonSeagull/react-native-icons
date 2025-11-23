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

export const LiaIntercom = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm9.002 2c-.318 0-.637.211-.637.633v9.217c0 .843 1.274.843 1.274 0V9.633c0-.422-.319-.633-.637-.633m-3.18.318c-.318 0-.636.212-.636.633v8.492c0 .843 1.271.843 1.271 0V9.951c0-.421-.316-.633-.635-.633m6.356 0c-.319 0-.637.212-.637.633v8.492c0 .843 1.273.843 1.273 0V9.951c0-.421-.318-.633-.636-.633M9.64 10.592c-.319 0-.635.211-.635.633v5.716c0 .843 1.271.843 1.271 0v-5.716c0-.422-.318-.633-.636-.633m12.716 0c-.318 0-.636.211-.636.633v5.716c0 .843 1.273.843 1.273 0v-5.716c0-.422-.318-.633-.637-.633m.075 9.207a.6.6 0 0 0-.487.156c-2.69 2.295-9.083 2.354-11.888 0-.64-.545-1.466.422-.827.967 3.252 2.784 10.442 2.682 13.541 0 .477-.412.131-1.057-.34-1.123" />
      </G>
    </Svg>
  );
};