

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTelescopicBaton = (props: IconProps) => {

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
          <Path d="M327.672 195.564L438.26 84.986a25.535 25.535 0 1 0-11.828-11.922l-110.683 110.63zM151.888 336.86l23.75 23.75L65.66 470.581a16.794 16.794 0 0 1-23.75-23.751zm149.808-143.522l16.33 16.33-134.79 134.79-16.33-16.33z" fill="#000" />
        </G>
      </Svg>
    );
  }

