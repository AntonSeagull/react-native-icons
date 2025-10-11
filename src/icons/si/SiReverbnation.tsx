

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiReverbnation = (props: IconProps) => {

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
          <Path  d="M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315" />
        </G>
      </Svg>
    );
  }

