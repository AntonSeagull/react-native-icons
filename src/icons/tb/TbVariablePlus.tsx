

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVariablePlus = (props: IconProps) => {

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
          <Path  d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 2 5.52 1.855 8.448m-11.855 -3.448h1c1 0 1 1 2.016 3.527c.785 1.972 .944 3.008 1.483 3.346" />
          <Path  d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
          <Path  d="M16 19h6" />
          <Path  d="M19 16v6" />
        </G>
      </Svg>
    );
  }

