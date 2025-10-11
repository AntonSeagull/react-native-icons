

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoDesktopOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z" />
        </G>
      </Svg>
    );
  }

