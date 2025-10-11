

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugStepOver = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14.25 5.75v-4h-1.5v2.542c-1.145-1.359-2.911-2.209-4.84-2.209-3.177 0-5.92 2.307-6.16 5.398l-.02.269h1.501l.022-.226c.212-2.195 2.202-3.94 4.656-3.94 1.736 0 3.244.875 4.05 2.166h-2.83v1.5h4.163l.962-.975V5.75h-.004zM8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </G>
      </Svg>
    );
  }

