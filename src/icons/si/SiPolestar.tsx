

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPolestar = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="m12.549 0-.457.555v11.191h11.19l.554-.457-9.4-1.89zM.719 12.26l-.555.457L9.563 14.6l1.886 9.4.457-.555V12.26Z" />
        </G>
      </Svg>
    );
  }

