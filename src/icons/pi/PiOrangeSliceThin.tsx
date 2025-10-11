

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiOrangeSliceThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M248,84H8a4,4,0,0,0-4,4,124,124,0,0,0,248,0A4,4,0,0,0,248,84ZM71.53,150.13,124,97.66V171.9A83.67,83.67,0,0,1,71.53,150.13Zm-5.66-5.66A83.67,83.67,0,0,1,44.1,92h74.24ZM132,97.66l52.47,52.47A83.67,83.67,0,0,1,132,171.9Zm58.13,46.81L137.66,92H211.9A83.67,83.67,0,0,1,190.13,144.47ZM128,204A116.14,116.14,0,0,1,12.07,92h24a92,92,0,0,0,183.82,0h24A116.14,116.14,0,0,1,128,204Z" />
        </G>
      </Svg>
    );
  }

