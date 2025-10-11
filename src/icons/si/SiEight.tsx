

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiEight = (props: IconProps) => {

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
          <Path  d="M5.908 6.092a5.908 5.908 0 1 0 0 11.816 5.908 5.908 0 0 0 0-11.816zm9.23 0v2.955h5.909V6.092h-5.908zm5.909 2.955v5.906H24V9.047h-2.953zm0 5.906h-5.908v2.955h5.908v-2.955zm-5.908 0V9.047h-2.953v5.906h2.953zm-9.23-5.906A2.956 2.956 0 0 1 8.86 12a2.956 2.956 0 0 1-2.953 2.953A2.958 2.958 0 0 1 2.953 12a2.958 2.958 0 0 1 2.955-2.953z" />
        </G>
      </Svg>
    );
  }

