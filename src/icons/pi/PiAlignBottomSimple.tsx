

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignBottomSimple = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208,232a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,232ZM80,192V40A16,16,0,0,1,96,24h64a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H96A16,16,0,0,1,80,192Zm16,0h64V40H96Z" />
        </G>
      </Svg>
    );
  }

