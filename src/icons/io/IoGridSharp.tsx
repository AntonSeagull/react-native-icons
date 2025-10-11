

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGridSharp = (props: IconProps) => {

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
          <Path  d="M240,240H32V32H240Z" />
          <Path  d="M480,240H272V32H480Z" />
          <Path  d="M240,480H32V272H240Z" />
          <Path  d="M480,480H272V272H480Z" />
        </G>
      </Svg>
    );
  }

