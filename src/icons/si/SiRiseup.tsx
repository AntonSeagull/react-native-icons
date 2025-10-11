

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiRiseup = (props: IconProps) => {

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
          <Path  d="M10.5 24l-1.485-9.007-8.961-1.738L8.16 9.06 7.045 0l6.495 6.414 8.271-3.861-4.093 8.16 6.228 6.673-9.024-1.372z" />
        </G>
      </Svg>
    );
  }

