

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoManSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M336,128H176a32,32,0,0,0-32,32V320h48V192h8V512h52V328h8V512h52V192h8V320h48V160A32,32,0,0,0,336,128Z" />
        </G>
      </Svg>
    );
  }

