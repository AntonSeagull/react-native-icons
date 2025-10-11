

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScanSharp = (props: IconProps) => {

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
          <Path  d="M388,466H320V422h68a34,34,0,0,0,34-34V320h44v68A78.09,78.09,0,0,1,388,466Z" />
          <Path  d="M466,192H422V124a34,34,0,0,0-34-34H320V46h68a78.09,78.09,0,0,1,78,78Z" />
          <Path  d="M192,466H124a78.09,78.09,0,0,1-78-78V320H90v68a34,34,0,0,0,34,34h68Z" />
          <Path  d="M90,192H46V124a78.09,78.09,0,0,1,78-78h68V90H124a34,34,0,0,0-34,34Z" />
        </G>
      </Svg>
    );
  }

