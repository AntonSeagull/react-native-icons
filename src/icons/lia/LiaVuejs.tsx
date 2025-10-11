

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaVuejs = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z" />
        </G>
      </Svg>
    );
  }

