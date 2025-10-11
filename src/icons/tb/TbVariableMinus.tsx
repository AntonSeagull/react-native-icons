

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVariableMinus = (props: IconProps) => {

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
          <Path  d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
          <Path  d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.775 3.55 2.29 7.102 1.544 11.01m-11.544 -6.01h1c1 0 1 1 2.016 3.527c.782 1.966 .943 3 1.478 3.343" />
          <Path  d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
          <Path  d="M16 19h6" />
        </G>
      </Svg>
    );
  }

