

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCirclesThreeLight = (props: IconProps) => {

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
          <Path  d="M170,76a42,42,0,1,0-42,42A42,42,0,0,0,170,76Zm-42,30a30,30,0,1,1,30-30A30,30,0,0,1,128,106Zm60,24a42,42,0,1,0,42,42A42,42,0,0,0,188,130Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,188,202ZM68,130a42,42,0,1,0,42,42A42,42,0,0,0,68,130Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,68,202Z" />
        </G>
      </Svg>
    );
  }

