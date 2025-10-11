

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiColumnsDuotone = (props: IconProps) => {

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
          <Path d="M112,48V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,112,48Zm80-8H152a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V48A8,8,0,0,0,192,40Z" />
          <Path d="M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z" />
        </G>
      </Svg>
    );
  }

