

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiEnglishInput = (props: IconProps) => {

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
          <Path  d="M14 10H16L16.0005 10.7574C16.7154 10.279 17.5751 10 18.5 10C20.9853 10 23 12.0147 23 14.5V20H21V14.5C21 13.07 19.8255 12 18.5 12C17.1745 12 16 13.07 16 14.5V20H14V10ZM12 4V6H4V11H12V13H4V18H12V20H2V4H12Z" />
        </G>
      </Svg>
    );
  }

