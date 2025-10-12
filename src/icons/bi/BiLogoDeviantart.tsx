

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoDeviantart = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M17.57 3h-3.271l-.326.33-1.544 2.942-.486.327H6.432v4.495h3.03l.27.327-3.3 6.305v3.273h3.272l.327-.33 1.543-2.943.486-.326h5.511v-4.495h-3.03l-.269-.329 3.299-6.303L17.57 3z" />
        </G>
      </Svg>
    );
  }

